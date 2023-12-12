import { FeaturedProduct } from "./types.utils";

const sliderImg: string[] = [
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/42384b0a93aa1a73.jpeg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8cd91a791a8723ff.jpg?q=20",
  "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2b43a232e3d86f58.jpeg?q=20",
];

const featuredCategories: string[] = ["mobile", "top deals", "electonics"];

const bestMobile: FeaturedProduct[] = [
  {
    id: "1",
    title: "Vivo T2 5G",
    desc: "Incl of offers",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/r/-original-imagpfbtmrr7spgc.jpeg?q=70",
  },
  {
    id: "2",
    title: "Motorola edge 40",
    desc: "Incl of offers",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/a/k/-original-imagqx45wnzbh25s.jpeg?q=70",
  },
  {
    id: "3",
    title: "Realme C51",
    desc: "Incl of offers",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/i/x/-original-imagt4qptrkzwmxa.jpeg?q=70",
  },
  {
    id: "4",
    title: "Redmi Note 12 Pro",
    desc: "Incl of offers",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70",
  },
  {
    id: "5",
    title: "Samsung F14 5G",
    desc: "Incl of offers",
    img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/n/k/-original-imagtyxb86ddjhzh.jpeg?q=70",
  },
  {
    id: "6",
    title: "Samsung F14 5G",
    desc: "Incl of offers",
    img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/n/k/-original-imagtyxb86ddjhzh.jpeg?q=70",
  },
];

const category = {
  name: "Home",
  subCategory: {
    name: "Mobile & Accesories",
    subCategory: {
      name: "Mobile",
      subCategory: {
        name: "Realme Mobile",
        subCategory: null,
      },
    },
  },
};

const specifications = {
  Specifications: {
    General: {
      "In The Box": [
        "Handset",
        "Type-C Cable",
        "Safety Information and Warranty Information",
        "Screen Protector (Pre- Applied)",
        "Sim Tray Ejector",
      ],
      "Model Number": "AIN065",
      "Model Name": "Phone (2)",
      Color: "White",
      "Browse Type": "Smartphones",
      "SIM Type": "Dual Sim",
      "Hybrid Sim Slot": "No",
      Touchscreen: "Yes",
      "OTG Compatible": "Yes",
      "Quick Charging": "Yes",
      "Sound Enhancements": "3 High Definition Mics, Dual Stereo Speakers",
    },
    "Display Features": {
      "Display Size": "17.02 cm (6.7 inch)",
      Resolution: "2412 x 1080 Pixels",
      "Resolution Type": "Full HD+",
      GPU: "Adreno 730",
      "Display Type": "Flexible LTPO AMOLED Display",
      "HD Game Support": "Yes",
      "Other Display Features": [
        "Corning Gorilla Glass",
        "HDR10+ & SGS Low Blue Light",
        "1,000,000:1 Contrast Ratio",
        "1000 nits (Outdoor Fullscreen Brightness)",
        "1600 nits (HDR Peak Pixel Brightness)",
        "1Hz - 120Hz Adaptive Refresh Rate",
        "240Hz Touch Sampling Rate",
        "Haptic Touch Motor",
      ],
    },
    "Os & Processor Features": {
      "Operating System": "Android 13",
      "Processor Brand": "Snapdragon",
      "Processor Type": "Qualcomm Snapdragon 8+ Gen 1",
      "Processor Core": "Octa Core",
      "Primary Clock Speed": "3 GHz",
      "Secondary Clock Speed": "2.5 GHz",
      "Tertiary Clock Speed": "1.8 GHz",
    },
    "Memory & Storage Features": {
      "Internal Storage": "256 GB",
      RAM: "12 GB",
    },
    "Camera Features": {
      "Primary Camera Available": "Yes",
      "Primary Camera": "50 MP(OIS) +50MP",
      "Primary Camera Features":
        "Dual Camera Setup: 50MP Main Camera (Sony IMX890 Sensor, f/1.88 Aperture, ...)",
      "Secondary Camera Available": "Yes",
      "Secondary Camera": "32MP Front Camera",
      "Secondary Camera Features":
        "Front Camera Setup: 32MP (Sony IMX615 Sensor, f/2.45 Aperture, ...)",
      "HD Recording": "Yes",
      "Full HD Recording": "Yes",
      "Video Recording": "Yes",
      "Video Recording Resolution": [
        "Rear: 4K (at 60fps), Live HDR (4K (at 30 fps)), 1080p (at 30 fps/60 fps), Slow-Mo (480 fps)",
        "Front: 1080p (60 fps), Live HDR (1080p (at 30 fps))",
        "Frame Rate: 480 fps, 60 fps, 30 fps",
        "Dual Camera Lens: Primary Camera",
      ],
    },
    "Call Features": {
      "Call Wait/Hold": "Yes",
      "Hands Free": "Yes",
      "Video Call Support": "Yes",
      "Call Divert": "Yes",
      "Phone Book": "Yes",
      "Call Timer": "Yes",
      "Speaker Phone": "Yes",
      "Call Records": "Yes",
      Logs: "Yes",
    },
    "Connectivity Features": {
      "Network Type": "5G, 4G, 3G, 2G",
      "Supported Networks": "5G, 4G LTE, UMTS, GSM",
      "Bluetooth Support": "Yes",
      "Bluetooth Version": "v5.3",
      "Wi-Fi": "Yes",
      "Wi-Fi Version": [
        "Wi-Fi 6",
        "802.11 a/b/g/n/ac/ax",
        "(2.4 GHz | 5 GHz Dual Band)",
        "2x2 MIMO and MU-MIMO",
        "Wi-Fi Direct",
        "Hotspot",
      ],
      "Wi-Fi Hotspot": "Yes",
      NFC: "Yes",
      "GPS Support": "Yes",
    },
    "Other Details": {
      Smartphone: "Yes",
      "SIM Size": "Nano Sim",
      "User Interface": "Nothing OS 2.0",
      "Removable Battery": "No",
      MMS: "Yes",
      SMS: "Yes",
      Keypad: "No",
      "Voice Input": "Yes",
      "Graphics PPI": "394 PPI",
      "Predictive Text Input": "Yes",
      "SIM Access": "Dual Standby",
      Sensors: [
        "In Display Fingerprint Sensor",
        "Front and Rear Ambient Light Sensor",
        "Accelerometer",
        "Electronic Compass",
        "Gyroscope",
        "Proximity Sensor",
        "Sensor Core",
      ],
      "Upgradable Operating System":
        "3 Years of Android Updates, 4 Years of Security Patches Every 2 Months",
      Series: "Nothing Phone",
      "Other Features": [
        "IP54",
        "Fingerprint Sensor",
        "Facial Recognition",
        " Works with Face Coverings",
        "5W Reverse Charging",
        "Image",
        "Formats: JPEG/PNG/BMP/GIF/WEB/HEIF/HEIC/DNG",
      ],
      "GPS Type":
        "L1+L5 Dual Band, A-GPS, GLONASS, BDS, GALILEO, QZSS, NAVIC, and SBAS",
    },

    "Multimedia Features": {
      "Audio Formats":
        "MP3/AAC/AAC+/WMA/AMR-NB/AMR-WB/WAV/FLAC/APE/OGG/MID/M4A/IMY/AC3/",
      "Video Formats": "MKV/MOV/MP4/H.265 (HEVC)/AVI/WMV/TS/3GP/FLV/WEBM",
    },
    "Battery & Power Features": {
      "Battery Capacity": "4700 mAh",
    },
    Dimensions: {
      Width: "76.4 mm",
      Height: "162.1 mm",
      Depth: "8.6 mm",
      Weight: "201.2 g",
    },
  },
};

export { sliderImg, featuredCategories, bestMobile, category, specifications };
