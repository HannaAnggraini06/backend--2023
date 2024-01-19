-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2024 pada 05.32
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_uas_pegawai`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `employees`
--

CREATE TABLE `employees` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `gender` char(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `status` enum('Magang','Tetap') NOT NULL,
  `hired_on` date DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `employees`
--

INSERT INTO `employees` (`id`, `name`, `gender`, `phone`, `address`, `email`, `status`, `hired_on`, `timestamp`) VALUES
(NULL, 'Mammon', 'Laki-Laki', '089566677732', 'jl kenangan', 'mmn5@gmail.com', 'Magang', '2024-01-09', '0000-00-00 00:00:00'),
(2, 'Hanna', 'Perempuan', '0895321401366', 'jl keadilan', 'hannaanggraini0610@gmail.com', 'Tetap', '2024-01-06', '0000-00-00 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
