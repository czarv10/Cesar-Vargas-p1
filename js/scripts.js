// Car Data array
var data = [
    {
        name: 'Acura RDX',
        description: 'The all new third-Generation, now has its own dedicated platform and engine, not to mention a great new look.',
        enginetype: 'VTEC turbo 2.0-l 272hp',
        yearmodel: 2019,
        price: 37000,
        selector: 'p1'
    },
    {
        name: 'Genesis G70',
        description: '4-door compact executive sedan.',
        enginetype: '2.0L 252hp',
        yearmodel: 2019,    
        price: 34900,
        selector: 'p2'
    },
    {
        name: 'GMC Sierra',
        description: '4-door Pick Up Truck.',
        enginetype: '2.7L Turbo 450hp',
        yearmodel: 2019,
        price: 42000,
        selector: 'p3'
    },
    {
        name: 'Honda Passport',
        description: 'Sporty SUV with plenty of room for adventure.',
        enginetype: 'engine:3.5L  280hp',
        yearmodel: 2019,
        price: 38000,
        selector: 'p4'
    },
    {
        name: 'Ford Ranger',
        description: 'Super Crew Pickup truck, best gas fuel efficiency.',
        enginetype: '2.3L 270hp',
        yearmodel: 2019,
        price: 24000,
        selector: 'p5'
    }
];

// car constructor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.enginetype = data.enginetype;
    this.yearmodel = data.yearmodel;
    this.price = data.price;
    this.selector = data.selector;

    this.getFormattedPrice = function() {
        return this.price.toLocaleString();
    };
}

// Return today's data, formatted
var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
};

//Write car info to page
function writePackageInfo(package) {
    // reference fo DOM elements
    var selector = package.selector,
        nameEl = document.getElementById(selector + '-name'),
        descEl = document.getElementById(selector + '-description'),
        etypeEl = document.getElementById(selector + '-enginetype'),
        ymodelEl = document.getElementById(selector + '-yearmodel'),
        priceEl = document.getElementById(selector + '-price');
        
        
        // write car data to DOM element
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        etypeEl.textContent = package.enginetype;
        ymodelEl.textContent = package.yearmodel;
        priceEl.textContent = package.getFormattedPrice();
}

// to Initialize the scrip
function init() {
    // it loops through each data element
    // construct a new car object
    // then write the car data to the page
    for (var i = 0; i < data.length; i++) {
        var packageData = data[i];
        var package = new Package(packageData);

        writePackageInfo(package);
    }

    // date
    dateEl = document.getElementById('date');
    dateEl.textContent = getTodaysDate();

}

// call the init function

init();