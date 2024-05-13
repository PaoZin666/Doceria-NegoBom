<?php
// Conectar ao banco de dados
$servername = "localhost";
$username = "nigga_candy";
$password = "nigga_candy";
$dbname = "login.sql";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Erro de conexão com o banco de dados: " . $conn->connect_error);
}

// Recuperar dados do formulário
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// Preparar e executar a consulta SQL
$sql = "INSERT INTO users (username, email, password_hash) VALUES ('$username', '$email', '$password_hash')";

if ($conn->query($sql) === TRUE) {
    echo "Novo registro criado com sucesso";
} else {
    echo "Erro ao criar novo registro: " . $conn->error;
}

$conn->close();
?>
