1. 
SELECT 
lib_region.region_name,personprofile.firstname,
personprofile.lastname,lib_cycle.name,
DATE_FORMAT(personprofile.createddate, '%m/%d/%Y')
FROM lib_region,personprofile,isvolunteertable,lib_cycle 
WHERE 
lib_region.region_code = ‘050000000’ AND 
lib_region.region_code = personprofile.region_code AND 
personprofile.personalprofileid = isvolunteertable.personalprofileid AND 
lib_cycle.cycle_id = isvolunteertable.cycle_id

2. 
SELECT * FROM personprofile where createddate BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY);

3. 
SELECT 
personprofile.firstname,
personprofile.lastname,
lib_region.region_name,
DATE_FORMAT(createddate, '%m/%d/%Y')
FROM lib_region,personprofile
WHERE 
lib_region.region_code = ‘070000000’ AND 
lib_region.region_code = personprofile.region_code

4.
SELECT 
personprofile.firstname,
personprofile.lastname,
lib_region.region_name,
DATE_FORMAT(createddate, '%m/%d/%Y') 
FROM lib_region,personprofile,isvolunteertable,lib_cycle 
WHERE lib_region.region_code = ‘080000000’ AND 
lib_region.region_code = personprofile.region_code AND 
personprofile.personalprofileid = isvolunteertable.personalprofileid AND 
lib_cycle.cycle_id = isvolunteertable.cycle_id AND
lib_cycle.id = 4
