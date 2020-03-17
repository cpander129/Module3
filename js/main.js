class Property {
    constructor(name, price, rating, location, rooms, available, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.available = available;
        this.features = features;
        this.type = 'property';
    }
    showDescription() {
        //create the div 
        let div = document.createElement('div');
        div.setAttribute('class', this.type);
        // Add p elements to div to hold info about properties
        div.appendChild(createParagraph('Name: ' + this.name + ' in ' + this.location));
        div.appendChild(createParagraph('Price: $' + this.price));
        div.appendChild(createParagraph('Rating: ' + this.rating + '/5'));
        div.appendChild(createParagraph('Rooms: ' + this.rooms));
        if (this.isAvailable()){
            div.appendChild(createParagraphWithAttribute('This property is available!', 'class', 'true'));
        }
        else{
            div.appendChild(createParagraphWithAttribute('We\'re sorry this property is not available', 'class', 'false'));
        }
        //For loop to loop through features array and add to a paragraph
        let featuresString = '';
        for (let i = 0; i < this.features.length; i++){
            featuresString += this.features[i];
            // Add a comma and space to each feature but the last one
            if (i != this.features.length - 1){
                featuresString += ', ';
            }
        }
        div.appendChild(createParagraph(featuresString));
        // add div to body of website
        document.body.appendChild(div);
    }
    isAvailable() {
        return this.available;
    }
}

class SpecialRateProperty extends Property {
    constructor(name, price, rating, location, rooms, available, features) {
        super(name, price, rating, location, rooms, available, features);
        this.type = 'special';
        // Reduces price in initial creation
        this.price = this.reducedRate();
    }
    // Return reduced rate
    reducedRate() {
        return this.price - (this.price * 0.2);
    }
}

class SuperHostProperty extends Property {
    constructor(name, price, rating, location, rooms, available, features) {
        super(name, price, rating, location, rooms, available, features);
        this.type = 'superHost'
    }

}

function createParagraph (text) {
    let para = document.createElement('p');
    para.appendChild(document.createTextNode(text));
    return para;
}

function createParagraphWithAttribute (text, attributeType, attributeValue) {
    let para = document.createElement('p');
    para.setAttribute(attributeType, attributeValue);
    para.appendChild(document.createTextNode(text));
    return para;
}

// Basic properties
let p1 = new Property('Ocean View Hideaway', 487.00, 4.78, 'Malibu', 2, true, ['Parking', 'Wifi', 'Cable', 'Office']);
let p2 = new Property('Cottage', 195.48, 4.87, 'Venice Beach', 1, false, ['Parking', 'Wifi', 'Cable']);

// Special rate property
let s1 = new SpecialRateProperty('Downtown Condo', 506.00, 4.2, 'Toronto', 3, true, ['Parking', 'Wifi', 'Cable', 'AC and Heat']);

// SuperHost property
let h1 = new SuperHostProperty('House', 625.50, 4.98, 'Muskoka', 5, false, ['Parking', 'Wifi', 'Cable', 'AC and Heat', 'Office']);

// create array to hold all properties

let properties = [p1, p2, s1, h1];

// create divs to display information about properties
for (let i = 0; i < properties.length; i++) {
    properties[i].showDescription();
}
