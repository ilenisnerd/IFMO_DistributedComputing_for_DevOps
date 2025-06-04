#!/bin/bash

# === Конфигурация ===
MASTER_IP="130.193.58.238"
SLAVE_IP="158.160.133.8"
PROMETHEUS_IP="84.201.147.207"
SSH_KEY="/home/ilen/.ssh/id_rsa"
ANSIBLE_USER="ilen"

HOSTS_FILE="hosts_script.ini"

# === 1. Создание hosts.ini ===
echo "Создаём файл $HOSTS_FILE..."
cat > "$HOSTS_FILE" <<EOF
[mysql_master]
$MASTER_IP ansible_ssh_private_key_file=$SSH_KEY ansible_user=$ANSIBLE_USER

[mysql_slave]
$SLAVE_IP ansible_ssh_private_key_file=$SSH_KEY ansible_user=$ANSIBLE_USER

[prometheus]
$PROMETHEUS_IP ansible_ssh_private_key_file=$SSH_KEY ansible_user=$ANSIBLE_USER
EOF

echo "Файл $HOSTS_FILE создан."

# === 2. Установка Docker и зависимостей ===
echo "Устанавливаем Docker и зависимости..."
ansible-playbook -i "$HOSTS_FILE" install_docker.yml || { echo "Ошибка при установке Docker"; exit 1; }

# === 3. Развёртывание мастера WordPress ===
echo "Разворачиваем мастер WordPress..."
ansible-playbook -i "$HOSTS_FILE" install_master_wordpress.yml || { echo "Ошибка при установке мастера WordPress"; exit 1; }

# === 4. Развёртывание слейва и настройка репликации ===
echo "Разворачиваем слейв и настраиваем репликацию..."
ansible-playbook -i "$HOSTS_FILE" install_slave.yml || { echo "Ошибка при установке слейва"; exit 1; }

# === 5. Установка Prometheus и Grafana ===
echo "Устанавливаем Prometheus и Grafana..."
ansible-playbook -i "$HOSTS_FILE" install_prometheus_grafana.yml || { echo "Ошибка при установке Prometheus/Grafana"; exit 1; }

echo " Все шаги выполнены успешно."
