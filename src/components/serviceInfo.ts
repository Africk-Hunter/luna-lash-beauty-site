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

];const lashLifts = [
    {
        title: "Lash lift & tint",
        price: 100,
        subServices: [
            {
                title: "Adds a curl to natural lashes and darkens them with a tint.",
                price: null,
            }
        ]
    },
    {
        title: "Lash lift with tint and Keratin",
        price: 115,
        subServices: [
            {
                title: "Lifts and tints lashes, with keratin to strengthen and hydrate.",
                price: null,
            }
        ]
    },
    {
        title: "Lash lift no tint",
        price: 90,
        subServices: [
            {
                title: "Adds a curl to natural lashes without applying tint.",
                price: null,
            }
        ]
    },
    {
        title: "Lash lift no tint with keratin",
        price: 105,
        subServices: [
            {
                title: "Lifts lashes without tint, with keratin for added moisture.",
                price: null,
            }
        ]
    }
];

const browServices = [
    {
        title: "Brow lamination",
        price: 100,
        subServices: [
            {
                title: "Straightens and reshapes brows for a polished, fuller look.",
                price: null,
            }
        ]
    },
    {
        title: "Brow lamination with tint",
        price: 115,
        subServices: [
            {
                title: "Laminates and tints brows for added definition and color.",
                price: null,
            }
        ]
    },
    {
        title: "Brow lamination with wax",
        price: 115,
        subServices: [
            {
                title: "Laminates brows and removes stray hairs with waxing.",
                price: null,
            }
        ]
    },
    {
        title: "Brow lamination with wax and tint",
        price: 130,
        subServices: [
            {
                title: "Laminates brows, tints for color, and removes stray hairs.",
                price: null,
            }
        ]
    },
    {
        title: "Brow wax and tint",
        price: 50,
        subServices: [
            {
                title: "Shapes brows with wax and tints for added color.",
                price: null,
            }
        ]
    },
    {
        title: "Brow tint",
        price: 25,
        subServices: [
            {
                title: "Colors brows to enhance their natural appearance.",
                price: null,
            }
        ]
    }
];

const waxServices = [
    { 
        title: "Brow", 
        price: 25, 
        subServices: [
            { title: "Shapes and defines brows for a clean, precise look.", price: null }
        ] 
    },
    { 
        title: "Upper Lip", 
        price: 25, 
        subServices: [
            { title: "Removes hair from the upper lip area.", price: null }
        ] 
    },
    { 
        title: "Chin", 
        price: 25, 
        subServices: [
            { title: "Removes unwanted hair from the chin area.", price: null }
        ] 
    },
    { 
        title: "Underarms", 
        price: 30, 
        subServices: [
            { title: "Removes hair from underarms for smooth skin.", price: null }
        ] 
    },
    {
        title: "Full arm",
        price: 50,
        subServices: [
            { title: "Removes hair from shoulders to wrists (underarms not included).", price: null }
        ]
    },
    {
        title: "Upper arm",
        price: 25,
        subServices: [
            { title: "Removes hair from shoulders to elbows (underarms not included).", price: null }
        ]
    },
    {
        title: "Lower arm",
        price: 30,
        subServices: [
            { title: "Removes hair from elbows to wrists (fingers included).", price: null }
        ]
    },
    {
        title: "Bikini",
        price: 35,
        subServices: [
            { title: "Removes hair along the bikini line (four-finger width).", price: null }
        ]
    },
    {
        title: "New Client Brazilian",
        price: 70,
        subServices: [
            { title: "Full hair removal, includes consultation and nourishing oil.", price: null }
        ]
    },
    {
        title: "Brazilian",
        price: 60,
        subServices: [
            { title: "Full hair removal, includes nourishing oil application.", price: null }
        ]
    },
    {
        title: "Ultimate Brazilian",
        price: 80,
        subServices: [
            { title: "Includes hair removal, warm towel, mask, and nourishing oil.", price: null }
        ]
    },
    { 
        title: "Full leg", 
        price: 100, 
        subServices: [
            { title: "Removes hair from the thighs to ankles.", price: null }
        ] 
    },
    {
        title: "Half leg (Upper)",
        price: 50,
        subServices: [
            { title: "Removes hair from the thighs to the knees.", price: null }
        ]
    },
    {
        title: "Half leg (Lower)",
        price: 50,
        subServices: [
            { title: "Removes hair from knees to ankles.", price: null }
        ]
    },
    {
        title: "Men's Back",
        price: 60,
        subServices: [
            { title: "Removes hair from the back; price may vary.", price: null }
        ]
    },
    {
        title: "Men's Chest",
        price: 50,
        subServices: [
            { title: "Removes hair from the chest; price may vary.", price: null }
        ]
    },
    {
        title: "Stomach",
        price: 45,
        subServices: [
            { title: "Removes hair from the stomach area; price may vary.", price: null }
        ]
    },
    {
        title: "Underarm & Brazilian bundle",
        price: 85,
        subServices: [
            { title: "Combines underarm and Brazilian services; save $5.", price: null }
        ]
    },
    {
        title: "Full leg & Brazilian bundle",
        price: 155,
        subServices: [
            { title: "Combines full leg and Brazilian services; save $5.", price: null }
        ]
    },
    {
        title: "Underarms + Full leg + Brazilian bundle",
        price: 180,
        subServices: [
            { title: "Combines all three services; save $10.", price: null }
        ]
    }
];

const facialServices = [
    {
        title: "Dermaplane facial",
        price: 85,
        subServices: [
            {
                title: "Exfoliates skin and removes peach fuzz for a smoother surface.",
                price: null,
            }
        ]
    }
];

export { lashServices, browServices, lashLifts, waxServices, facialServices };
