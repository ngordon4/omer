/*
Copyright © 2003, 2017 Nehemia Gordon

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 
/* ---THREE settings need to be updated every year--- */

/*Define Date of Beginning of Biblical Year (NOT DAY OF NEW MOON SIGHTING!)
For the purpose of this script, New Years Day is defined as the First Day of the First Biblical Month (1 Nissan). For example, if the new moon of the First Biblical month (Nissan) was sighted on Friday May 2, 2003, then New Years is defined as Saturday May 3, 2003. */
 
var dateOfNewYearsDay = 19; //On which day of the Gregorian month did the Biblical Year Begin (SEE ABOVE)?
var monthOfNewYearsDay = 3; //In which Gregorian month did the Biblical Year Begin?
var yearOfNewYearsDay = 2018; //The Gregorian Year e.g. 2017. If you want to do historical dates, this might not work correctly before 1970, since JavaScript uses 1970 as the starting date for it's date format. 