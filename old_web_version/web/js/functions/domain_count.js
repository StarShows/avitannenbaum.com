const domains = [
    "google.com",
    "api.google.com",
    "mountsinai.org",
    "app.mountsinai.org",
    "test.mountsinai.org",
    "test.mountsinai.org",
    "food.org",
    "support.food.org",
    "joelonsoftware.com",
    "recruiter.linked.com",
    "test.mountsinai.org",
    "google.com"
  ];

  
  //Developed by Avi (Alex) Tannenbaum 2019
  
 

  //#1 Create an array of domains, seperated by '.', and reverse it.
  function listOfDomainsReverse(domains) {
    // split the domains as sub domain for the array.
    const joinedDomains = [];
    for (let index = 0; index < domains.length; index++) {
      const newDomainListItem = domains[index].toString().split(".");
      joinedDomains.push(newDomainListItem.reverse());
    }
    return joinedDomains;
  }
  // create a value for this function for ease of use.
  const reverseDomains = listOfDomainsReverse(domains);
  // Out of 3 total array numbers i will now check if the length is 0, 1, 2. and combine the resluts after being counted.
  
  //detect same first occurences.
  function detectFirstHeaderOccurences(reverseDomains, subType) {
    const firstArray = []; // create a temp array
    for (let index = 0; index < reverseDomains.length; index++) {
      const domainEndingType = reverseDomains[index][subType];
      firstArray.push(domainEndingType); // add successful results from the for loop into the temp array.
    }
    return firstArray; // make the function value equal to the first array.
  }
  
  // 2# Simplify the results for later use of the values.
  const domainPartOne = detectFirstHeaderOccurences(reverseDomains, 0);
  const domainPartTwo = detectFirstHeaderOccurences(reverseDomains, 1);
  const domainPartThree = detectFirstHeaderOccurences(reverseDomains, 2);
  
  // #3 Create an array of values containin only the first part of the domain wich will always exist. for example:( .com, .org ).
  function joinOneArrays(one) {
    const finalResult = [];
    for (let index = 0; index < one.length; index++) {
      finalResult.push(one[index]);
    }
    return finalResult;
  }
  
  // #4 this function creates an array of the second (middle) part of the domain. for example (mountsinai, joelonsoftware)
  function joinTwoArrays(one, two) {
    const finalResult = [];
    for (let index = 0; index < one.length; index++) {
      finalResult.push(one[index] + "." + two[index]);
    }
    return finalResult;
  }
  
  // #5 this function creates an array of the third ( last part ) of the domain. which does not always exist and may result in 'undefined' in which case, it will check for undefined and only add to the temporary array first and second parts.
  function joinThreeArrays(one, two, three) {
    const finalResult = [];
    for (let index = 0; index < one.length; index++) {
      if (three[index] == undefined) {
        joinTwoArrays(one, two);
      } else {
        finalResult.push(one[index] + "." + two[index] + "." + three[index]);
      }
    }
    return finalResult;
  }
  
  // Create a result object, turn the array values to object keys, add number counter values for each repeater and + 1 for each repeated occurrence.
  function countFullDomainObject(domains) {
    const domainObject = {};
    for (var index = 0; index < domains.length; index++) {
      domainObject[domains[index]] = (domainObject[domains[index]] || 0) + 1;
    }
    return domainObject;
  }
  
  //Combine all the results from the object to one fial value for output display.
  var finalResult = Object.assign(
    {},
    countFullDomainObject(domainPartOne),
    countFullDomainObject(joinTwoArrays(domainPartOne, domainPartTwo)),
    countFullDomainObject(
      joinThreeArrays(domainPartOne, domainPartTwo, domainPartThree)
    )
  );
  console.log(finalResult);
