/*
-- Query: select * from User
LIMIT 0, 1000

-- Date: 2021-09-26 01:29
*/


create table user (UserID varchar(255),currentDate date,primary key (UserID));


INSERT INTO User (`UserID`,`currentDate`) VALUES ('User1',NULL);
INSERT INTO User (`UserID`,`currentDate`) VALUES ('User2',NULL);
INSERT INTO User (`UserID`,`currentDate`) VALUES ('User3',NULL);



DROP TABLE IF EXISTS `job_interview_assignment`;
CREATE TABLE `job_interview_assignment` (
  `dx_esrd` decimal(43,0) DEFAULT NULL,
  `dx_mi` bigint(21) unsigned DEFAULT NULL,
  `dx_stroke` bigint(21) unsigned DEFAULT NULL,
  `dx_htn` bigint(21) unsigned DEFAULT NULL,
  `dx_lpd` bigint(21) unsigned DEFAULT NULL,
  `dx_obe` bigint(21) unsigned DEFAULT NULL,
  `dx_dneu` bigint(21) unsigned DEFAULT NULL,
  `dx_cad` bigint(21) unsigned DEFAULT NULL,
  `dx_pvd` bigint(21) unsigned DEFAULT NULL,
  `dx_anm` bigint(21) unsigned DEFAULT NULL,
  `POP` varchar(4) CHARACTER SET utf8 NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

LOCK TABLES `job_interview_assignment` WRITE;

INSERT INTO `job_interview_assignment` VALUES (1,1,3,39,38,19,8,12,6,4,'both'),(2,1,2,37,35,15,5,17,4,13,'ckd'),(2,2,8,71,62,30,16,22,9,16,'diab');

select * from job_interview_assignment;

UNLOCK TABLES;