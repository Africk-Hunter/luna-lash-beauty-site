// services.js

const lashServices = [
    {
        title: "Classic Full Set",
        price: 150,
        subServices: [
            {
                title: "3 week fill",
                price: 90,
            },
            {
                title: "2 week fill",
                price: 75,
            },
            {
                title: "1 week fill",
                price: 45,
            },
        ]
    },
    {
        title: "Hybrid Full Set",
        price: 185,
        subServices: [
            {
                title: "3 week fill",
                price: 100,
            },
            {
                title: "2 week fill",
                price: 85,
            },
            {
                title: "1 week fill",
                price: 50,
            },
        ]
    },
    {
        title: "Volume Full Set",
        price: 220,
        subServices: [
            {
                title: "3 week fill",
                price: 110,
            },
            {
                title: "2 week fill",
                price: 85,
            },
            {
                title: "1 week fill",
                price: 50,
            },
        ]
    },
    {
        title: "Angel/Wet Set",
        price: 175,
        subServices: [
            {
                title: "3 week fill",
                price: 90,
            },
            {
                title: "2 week fill",
                price: 75,
            },
            {
                title: "1 week fill",
                price: 45,
            },
        ]
    },
    {
        title: "Touch up",
        price: 45,
        subServices: [
            {
                title: "A mini fill for when you need a small, quick touch up between your normal appointments ",
                price: null,
            },
        ]
    },
    {
        title: "Colored lash add on",
        price: 5,
    },
    {
        title: "Lash extension removal",
        price: 35,
    
    },

];

const lashLifts = [
    {
        title: "Lash lift & tint",
        price: 100,
    },
    {
        title: "Lash lift with tint and Keratin",
        price: 115,
        subServices: [
            {
                title: "Keratin is a nourishing treatment for your eyelashes. The chemicals in lash lifts can strip the lashes of their natural oils and keratin which can make them dry and brittle over time.  This lash mask adds moisture, keratin and other oils back into the lashes to keep them hydrated and healthy",
                price: null,
            }
        ]
    },
    {
        title: "Lash lift no tint",
        price: 90,
    },
    {
        title: "Lash lift no tint with keratin",
        price: 105,
    }
];
const browServices = [
    {
        title: "Brow lamination",
        price: 100,
    },
    {
        title: "Brow lamination with tint",
        price: 115,
    },
    {
        title: "Brow lamination with wax",
        price: 115,
    },
    {
        title: "Brow lamination with wax and tint",
        price: 130,
    },
    {
        title: "Brow wax and tint",
        price: 50,
    },
    {
        title: "Brow tint",
        price: 25,
    },
    
];
const waxServices = [
    {
        title: "Brow",
        price: 25,
    },
    {
        title: "Upper Lip",
        price: 25,
    },
    {
        title: "Chin",
        price: 25,
    },
    {
        title: "Underarms",
        price: 30,
    },
    {
        title: "Full arm",
        price: 50,
        subServices: [
            {
                title: "Underarms are not included. Add underarms for an additional $10.",
                price: null,
            }
        ]
    },
    {
        title: "Upper arm",
        price: 25,
        subServices: [
            {
                title: "Underarms are not included. Add underarms for an additional $10.",
                price: null,
            }
        ]
    },
    {
        title: "Lower arm",
        price: 30,
        subServices: [
            {
                title: "Fingers are included.",
                price: null,
            }
        ]
    },
    {
        title: "Bikini",
        price: 35,
        subServices: [
            {
                title: "Four fingers length out from bikini line",
                price: null,
            }
        ]
    },
    {
        title: "New Client Brazilian",
        price: 70,
        subServices: [
            {
                title: "Extra time to go over any questions you may have and get you established as a client. Nourishing oil applied",
                price: null,
            }
        ]
    },
    {
        title: "Brazilian",
        price: 60,
        subServices: [
            {
                title: "Nourishing oil applied",
                price: null,
            }
        ]
    },
    {
        title: "Ultimate Brazilian",
        price: 80,
        subServices: [
            {
                title: "Includes a warm towel, HydroJelly mask, and nourishing oil application.",
                price: null,
            }
        ]
    },
    {
        title: "Full leg",
        price: 100,
    },
    {
        title: "Half leg (Upper)",
        price: 50,
        subServices: [
            {
                title: "Includes knee and above",
                price: null,
            }
        ]
    },
    {
        title: "Half leg (Lower)",
        price: 50,
        subServices: [
            {
                title: "Includes knee and below",
                price: null,
            }
        ]
    },
    {
        title: "Men's Back",
        price: 60,
        subServices: [
            {
                title: "Price may vary.",
                price: null,
            }
        ]
    },
    {
        title: "Men's Chest",
        price: 50,
        subServices: [
            {
                title: "Price may vary.",
                price: null,
            }
        ]
    },
    {
        title: "Stomach",
        price: 45,
        subServices: [
            {
                title: "Price may vary.",
                price: null,
            }
        ]
    },
    {
        title: "Underarm & Brazilian bundle",
        price: 85,
        subServices: [
            {
                title: "Save $5 when these services are booked together",
                price: null,
            }
        ]
    },
    {
        title: "Full leg & Brazilian bundle",
        price: 155,
        subServices: [
            {
                title: "Save $5 when these services are booked together",
                price: null,
            }
        ]
    },
    {
        title: "Underarms + Full leg + Brazilian bundle",
        price: 180,
        subServices: [
            {
                title: "Save $10 when these services are booked together",
                price: null,
            }
        ]
    },

];
const facialServices = [

    {
        title: "Dermaplane facial",
        price: 85,
        subServices: [
            {
                title: "This non invasive facial is great for removing vellus facial hair (peach fuzz) and deep exfoliation to allow product to absorb into the skin even more. It's a great exfoliation that can help with acne scarring, brightness, reducing fine lines, hyperpigmentation and evening skin tone. Hair does not grow back thicker or fuller.",
                price: null,
            }
        ]
    },

];

export { lashServices, browServices, lashLifts, waxServices, facialServices };
