#!/usr/bin/env bash
set -euo pipefail

# Nova — Deployment Script
# Deploys to dev.benardkimani.co.ke/nova via Docker Compose + Traefik,
# alongside the companion goolang-backend site on the same VPS.

REMOTE_HOST="${REMOTE_HOST:-root@173.212.209.92}"
REMOTE_DIR="/root/projects/nova"
TRAEFIK_DYNAMIC_DIR="/root/infra/traefik/dynamic"
DEPLOY_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$DEPLOY_DIR/.." && pwd)"
DOMAIN="dev.benardkimani.co.ke"

log() { echo -e "\033[1;36m▸ $1\033[0m"; }
ok() { echo -e "\033[1;32m✓ $1\033[0m"; }
err() { echo -e "\033[1;31m✗ $1\033[0m"; exit 1; }

command -v ssh >/dev/null 2>&1 || err "ssh not found"

log "Testing SSH connection..."
ssh -o ConnectTimeout=10 "$REMOTE_HOST" "echo ok" >/dev/null 2>&1 || err "Cannot connect to $REMOTE_HOST"

log "Ensuring remote directory exists..."
ssh "$REMOTE_HOST" "mkdir -p $REMOTE_DIR"

log "Syncing project to server..."
rsync -avz --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='coverage' \
  "$PROJECT_ROOT/" "$REMOTE_HOST:$REMOTE_DIR/"

log "Installing Traefik dynamic route (nova.yml)..."
ssh "$REMOTE_HOST" "mkdir -p $TRAEFIK_DYNAMIC_DIR"
scp "$DEPLOY_DIR/nova.yml" "$REMOTE_HOST:$TRAEFIK_DYNAMIC_DIR/nova.yml"

log "Verifying Docker network..."
ssh "$REMOTE_HOST" "docker network ls | grep -q proxy_network" || \
  ssh "$REMOTE_HOST" "docker network create proxy_network"

log "Building and starting container..."
ssh "$REMOTE_HOST" "cd $REMOTE_DIR/deploy && docker compose down --remove-orphans 2>/dev/null; docker compose up -d --build"

log "Waiting for container to start..."
sleep 5

log "Checking container status..."
ssh "$REMOTE_HOST" "cd $REMOTE_DIR/deploy && docker compose ps"

echo ""
ok "Deployment complete!"
echo ""
echo "  🌐 Site: https://$DOMAIN/nova"
echo ""
echo "  Check logs: ssh $REMOTE_HOST 'cd $REMOTE_DIR/deploy && docker compose logs -f'"
echo ""
