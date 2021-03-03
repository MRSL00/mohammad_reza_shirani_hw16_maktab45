-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  `brief` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  `content` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  `create_data` datetime DEFAULT NULL,
  `Writer_id` int NOT NULL,
  `Category_id` int NOT NULL,
  PRIMARY KEY (`id`,`Writer_id`,`Category_id`),
  KEY `fk_Article_Writer_idx` (`Writer_id`),
  KEY `fk_Article_Category1_idx` (`Category_id`),
  CONSTRAINT `fk_Article_Category1` FOREIGN KEY (`Category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_Article_Writer` FOREIGN KEY (`Writer_id`) REFERENCES `writer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'hello','hhhh','wwwww','2020-01-01 10:10:10',1,1),(2,'by','qwe','asd','2020-01-01 21:40:10',1,1),(3,'book','jhk','khkh','2019-04-12 21:40:10',2,5),(4,'film','sfsd','axv','2012-09-03 21:40:10',3,2),(5,'node','qe','wer','2015-01-03 21:40:10',4,3);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_has_tag`
--

DROP TABLE IF EXISTS `article_has_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_has_tag` (
  `article_id` int NOT NULL,
  `article_Writer_id` int NOT NULL,
  `article_Category_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`article_id`,`article_Writer_id`,`article_Category_id`,`tag_id`),
  KEY `fk_article_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_article_has_tag_article1_idx` (`article_id`,`article_Writer_id`,`article_Category_id`),
  CONSTRAINT `fk_article_has_tag_article1` FOREIGN KEY (`article_id`, `article_Writer_id`, `article_Category_id`) REFERENCES `article` (`id`, `Writer_id`, `Category_id`),
  CONSTRAINT `fk_article_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_has_tag`
--

LOCK TABLES `article_has_tag` WRITE;
/*!40000 ALTER TABLE `article_has_tag` DISABLE KEYS */;
INSERT INTO `article_has_tag` VALUES (2,1,1,2),(4,3,2,2),(5,4,3,3),(3,2,5,4);
/*!40000 ALTER TABLE `article_has_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'first'),(2,'second'),(3,'third'),(4,'fourth'),(5,'fifth');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'hello_tag'),(2,'by_tag'),(3,'book_tag'),(4,'film_tag'),(5,'node_tag');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `writer`
--

DROP TABLE IF EXISTS `writer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `writer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  `last_name` varchar(45) COLLATE utf8_persian_ci DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `writer`
--

LOCK TABLES `writer` WRITE;
/*!40000 ALTER TABLE `writer` DISABLE KEYS */;
INSERT INTO `writer` VALUES (1,'ali','gholami',27),(2,'hadi','ahmadi',43),(3,'mohammad','shirani',34),(4,'reza','shirazi',23),(5,'sami','tehrani',35);
/*!40000 ALTER TABLE `writer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03  0:41:34
