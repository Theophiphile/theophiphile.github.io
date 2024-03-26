var db = {
  Building: {
    medical: {
      AdvancedDoctorStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.25,
        internalHeat: 0.5,
        width: 2,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Apothecary: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 0.5,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      DecontaminationShower: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal",
          "Lead"
        ],
        width: 2,
        height: 4,
        hp: 250,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 900.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      DoctorStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 3,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Grave: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 800.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      HandSanitizer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MassageTable: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 2,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      MedicalCot: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 3,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      WashBasin: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WashSink: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    equipment: {
      AdvancedResearchCenter: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ArtifactAnalysisStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      ClothingAlterationStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ClothingFabricator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CraftingTable: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      DLC1CosmicResearchCenter: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      FarmStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      GeneticAnalysisStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 7,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      GeoTuner: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      JetSuitLocker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      JetSuitMarker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LeadSuitLocker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LeadSuitMarker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MilkingStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 600.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true,
        workTime: 20.0
      },
      MissileFabricator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          960.0
        ],
        internalHeat: 8.0,
        width: 5,
        height: 4,
        hp: 250,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      NuclearResearchCenter: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 5,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      OrbitalResearchCenter: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      OxygenMaskLocker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OxygenMaskMarker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PowerControlStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      RanchStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        workTime: 12.0
      },
      ResearchCenter: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ResetSkillsStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      ShearingStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        workTime: 12.0
      },
      SuitFabricator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      SuitLocker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SuitMarker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    food: {
      AirBorneCritterCondo: {
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Plastic"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CookingStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 3,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CreatureFeeder: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CritterCondo: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 210.0,
        floodThreshold: 0.35,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CritterDropOff: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CritterPickUp: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      EggCracker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      EggIncubator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 363.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      FarmTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Farmable"
        ],
        rotations: "FlipV",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        deconstructable: true
      },
      FishDeliveryPoint: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      FishFeeder: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      FoodDehydrator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        internalHeat: 4.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 300.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      FoodRehydrator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 150.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      GourmetCookingStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 1.0,
        internalHeat: 8.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      HydroponicFarm: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      MicrobeMusher: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MilkFeeder: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PlanterBox: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Farmable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      RationBox: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Refrigerator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          120.0,
          20.0
        ],
        internalHeat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SpiceGrinder: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      UnderwaterCritterCondo: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        rotations: "FlipH",
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      CreatureAirTrap: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CreatureGroundTrap: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      WaterTrap: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    utilities: {
      AirConditioner: {
        thermalConductivity: 5.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          240.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      IceCooledFan: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: -24.0,
        internalHeat: -8.0,
        width: 2,
        height: 2,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      IceMachine: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 4.0,
        internalHeat: 12.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LiquidConditioner: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          1200.0
        ],
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 1200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidHeater: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          960.0
        ],
        externalHeat: 4000.0,
        internalHeat: 64.0,
        width: 4,
        height: 1,
        hp: 30,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OilWellCap: {
        thermalConductivity: 1.0,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 2.0,
        width: 4,
        height: 4,
        hp: 100,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      OreScrubber: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SpaceHeater: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 2.0,
        internalHeat: 16.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SweepBotStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 75.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ThermalBlock: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableAny"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 800.0,
        deconstructable: true,
        enableable: true
      }
    },
    oxygen: {
      AirFilter: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          5.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      AlgaeHabitat: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Farmable"
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      CO2Scrubber: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Electrolyzer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MineralDeoxidizer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 1.0,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      RustDeoxidizer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SublimationStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.5,
        internalHeat: 1.0,
        width: 2,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    refining: {
      AlgaeDistillery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.5,
        internalHeat: 1.0,
        width: 3,
        height: 4,
        hp: 100,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Chlorinator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        externalHeat: 1.0,
        internalHeat: 2.0,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Compost: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        externalHeat: 0.125,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      DiamondPress: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 16.0,
        width: 3,
        height: 5,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      EthanolDistillery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FertilizerMaker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 1.0,
        internalHeat: 2.0,
        width: 4,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      GlassForge: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 16.0,
        width: 5,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Kiln: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 16.0,
        internalHeat: 4.0,
        width: 2,
        height: 2,
        hp: 100,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MetalRefinery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 16.0,
        width: 3,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MilkFatSeparator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        internalHeat: 8.0,
        width: 4,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true,
        storages: [
          {
            Item1: "internal",
            Item2: [
              "MilkFat"
            ],
            Item3: 15.0
          }
        ]
      },
      MilkPress: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        internalHeat: 2.0,
        width: 2,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OilRefinery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        externalHeat: 2.0,
        internalHeat: 8.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      OxyliteRefinery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        electrityConsummation: [
          1200.0
        ],
        externalHeat: 8.0,
        internalHeat: 4.0,
        width: 3,
        height: 4,
        hp: 100,
        mass: 900.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      Polymerizer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 32.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      RockCrusher: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 16.0,
        width: 4,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SludgePress: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SupermaterialRefinery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          1600.0
        ],
        internalHeat: 16.0,
        width: 4,
        height: 5,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      WaterPurifier: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 4.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Desalinator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          480.0
        ],
        internalHeat: 8.0,
        width: 4,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      }
    },
    furniture: {
      ArcadeMachine: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 2.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      BeachChair: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 402.0,
        floodThreshold: 0.35,
        decor: 25.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      Bed: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Canvas: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 30,
        mass: 401.0,
        decor: 10.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CanvasTall: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 2,
        height: 3,
        hp: 30,
        mass: 401.0,
        decor: 15.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CanvasWide: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal",
          "BuildingFiber"
        ],
        rotations: "FlipH",
        width: 3,
        height: 2,
        hp: 30,
        mass: 401.0,
        decor: 15.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      CeilingLight: {
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          10.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      CornerMoulding: {
        thermalConductivity: 1.0,
        locationRule: "InCorner",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      CrownMoulding: {
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      DiningTable: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      EspressoMachine: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FloorLamp: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          8.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVase: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVaseHanging: {
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 50.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVaseHangingFancy: {
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Transparent"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      FlowerVaseWall: {
        thermalConductivity: 1.0,
        locationRule: "OnWall",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        deconstructable: true,
        enableable: true
      },
      HotTub: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal",
          "BuildingWood"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 1.0,
        internalHeat: 4.0,
        width: 5,
        height: 2,
        hp: 30,
        highTempWarning: 310.85,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      IceSculpture: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Ice"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      ItemPedestal: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Juicer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 0.5,
        width: 3,
        height: 4,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LadderBed: {
        thermalConductivity: 1.0,
        locationRule: "OnFloorOrBuildingAttachPoint",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 2,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LuxuryBed: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        width: 4,
        height: 2,
        hp: 10,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      MarbleSculpture: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "PreciousRock"
        ],
        rotations: "FlipH",
        width: 2,
        height: 3,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      MechanicalSurfboard: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      MetalSculpture: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 10,
        mass: 400.0,
        decor: 20.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      MonumentBottom: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Steel",
          "Obsidian"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      MonumentMiddle: {
        thermalConductivity: 1.0,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "Ceramic",
          "Polypropylene",
          "Steel"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      MonumentTop: {
        thermalConductivity: 1.0,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "Glass",
          "Diamond",
          "Steel"
        ],
        rotations: "FlipH",
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 10000.0,
        decor: 10.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      ParkSign: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableAny"
        ],
        width: 1,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Phonobox: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          960.0
        ],
        internalHeat: 1.0,
        width: 5,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PixelPack: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass",
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 4,
        height: 1,
        hp: 30,
        mass: 125.0,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      Sauna: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal",
          "BuildingWood"
        ],
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Sculpture: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 8.0,
        deconstructable: true,
        enableable: true
      },
      SmallSculpture: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        hp: 10,
        mass: 200.0,
        decor: 5.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      SodaFountain: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          480.0
        ],
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SunLamp: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Glass"
        ],
        electrityConsummation: [
          960.0
        ],
        externalHeat: 1.0,
        internalHeat: 4.0,
        width: 2,
        height: 4,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 250.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true,
        enableable: true
      },
      Telephone: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      VerticalWindTunnel: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Plastic"
        ],
        electrityConsummation: [
          1200.0
        ],
        internalHeat: 2.0,
        width: 5,
        height: 6,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 1200.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WaterCooler: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    RocketModule: {
      ArtifactCargoBay: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 1,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      BatteryModule: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      CO2Engine: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      GasCargoBayCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      GasCargoBaySmall: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      HEPEngine: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      HabitatModuleMedium: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 5,
        height: 4,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      HabitatModuleSmall: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      HydrogenEngineCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        generatorWattageRating: 600.0,
        width: 7,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      },
      KeroseneEngineCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        generatorWattageRating: 480.0,
        width: 7,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      KeroseneEngineClusterSmall: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        generatorWattageRating: 240.0,
        width: 3,
        height: 4,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidCargoBayCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      LiquidCargoBaySmall: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      LiquidFuelTankCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      NoseconeBasic: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Insulator"
        ],
        width: 5,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 600.0,
        deconstructable: true,
        enableable: true
      },
      NoseconeHarvest: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 5,
        height: 4,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 600.0,
        deconstructable: true,
        enableable: true,
        workTime: 7.5
      },
      OrbitalCargoModule: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        numCapsules: 30.0
      },
      OxidizerTankCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      OxidizerTankLiquidCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      PioneerModule: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      ScannerModule: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel",
          "Polypropylene"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1350.0,
        deconstructable: true,
        enableable: true,
        rangeMax: 0.0
      },
      ScoutModule: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SmallOxidizerTank: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SolarPanelModule: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Glass"
        ],
        generatorWattageRating: 60.0,
        width: 3,
        height: 1,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      CargoBayCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        width: 5,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        deconstructable: true,
        enableable: true
      },
      SolidCargoBaySmall: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SpecialCargoBayCluster: {
        thermalConductivity: 0.1,
        locationRule: "BuildingAttachPoint",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 1,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SteamEngineCluster: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        generatorWattageRating: 600.0,
        width: 7,
        height: 5,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true
      },
      SugarEngine: {
        thermalConductivity: 0.1,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 60.0,
        width: 3,
        height: 3,
        invincible: true,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        deconstructable: true,
        enableable: true
      }
    },
    conveyance: {
      AutoMiner: {
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 2.0,
        width: 2,
        height: 2,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      ModularLaunchpadPortSolid: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Load"
      },
      ModularLaunchpadPortSolidUnloader: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Unload"
      },
      SolidConduitBridge: {
        thermalConductivity: 1.0,
        locationRule: "Conduit",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 10,
        mass: 400.0,
        deconstructable: true
      },
      SolidConduit: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      SolidConduitInbox: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 2.0,
        width: 1,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SolidConduitOutbox: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true
      },
      SolidConduitDiseaseSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidConduitElementSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidConduitTemperatureSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidFilter: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        width: 3,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      SolidLimitValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      SolidLogicValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      SolidTransferArm: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 2.0,
        width: 3,
        height: 1,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SolidVent: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    power: {
      Battery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      BatteryMedium: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      BatterySmart: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        internalHeat: 0.5,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      Generator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 600.0,
        externalHeat: 8.0,
        internalHeat: 1.0,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      HydrogenGenerator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 800.0,
        externalHeat: 2.0,
        internalHeat: 2.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      LogicPowerRelay: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      ManualGenerator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 400.0,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      MethaneGenerator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 800.0,
        externalHeat: 2.0,
        internalHeat: 8.0,
        width: 4,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PetroleumGenerator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 2000.0,
        externalHeat: 4.0,
        internalHeat: 16.0,
        width: 3,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      PowerTransformer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        generatorWattageRating: 4000.0,
        internalHeat: 1.0,
        width: 3,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PowerTransformerSmall: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        generatorWattageRating: 1000.0,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      SolarPanel: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Glass"
        ],
        generatorWattageRating: 380.0,
        width: 7,
        height: 3,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      SteamTurbine2: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "FlipH",
        generatorWattageRating: 850.0,
        internalHeat: 4.0,
        width: 5,
        height: 3,
        hp: 30,
        highTempWarning: 1273.15,
        highTempFatal: 533.15,
        mass: 1000.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      Switch: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      WireBridge: {
        thermalConductivity: 1.0,
        locationRule: "WireBridge",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      WireBridgeHighWattage: {
        thermalConductivity: 1.0,
        locationRule: "HighWattBridgeTile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      Wire: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      HighWattageWire: {
        thermalConductivity: 0.05,
        locationRule: "NotInTiles",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      WireRefinedBridge: {
        thermalConductivity: 1.0,
        locationRule: "WireBridge",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      WireRefinedBridgeHighWattage: {
        thermalConductivity: 1.0,
        locationRule: "HighWattBridgeTile",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      WireRefined: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      WireRefinedHighWattage: {
        thermalConductivity: 0.05,
        locationRule: "NotInTiles",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -20.0,
        decorRadius: 4.0,
        deconstructable: true
      },
      WoodGasGenerator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 300.0,
        externalHeat: 8.0,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    plumbing: {
      BottleEmptier: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidConduitDiseaseSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidConduitElementSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidConduitTemperatureSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      ContactConductivePipeBridge: {
        thermalConductivity: 2.0,
        locationRule: "NoLiquidConduitAtOrigin",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      FlushToilet: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        externalHeat: 0.25,
        width: 2,
        height: 3,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      InsulatedLiquidConduit: {
        thermalConductivity: 0.03125,
        locationRule: "Anywhere",
        materialCategory: [
          "Plumbable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 400.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidConduitBridge: {
        thermalConductivity: 1.0,
        locationRule: "Conduit",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      LiquidConduit: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Plumbable"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        deconstructable: true
      },
      LiquidConduitRadiant: {
        thermalConductivity: 2.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidFilter: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        internalHeat: 4.0,
        width: 3,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LiquidLimitValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidLogicValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidMiniPump: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidPump: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        internalHeat: 2.0,
        width: 2,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LiquidPumpingStation: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 2,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      LiquidValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidVent: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ModularLaunchpadPortLiquid: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Load"
      },
      ModularLaunchpadPortLiquidUnloader: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Unload"
      },
      Outhouse: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        externalHeat: 0.25,
        width: 2,
        height: 3,
        hp: 30,
        mass: 200.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 5.0,
        deconstructable: true,
        enableable: true
      },
      Shower: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: 0.25,
        width: 2,
        height: 4,
        hp: 30,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      WallToilet: {
        thermalConductivity: 1.0,
        locationRule: "WallFloor",
        materialCategory: [
          "Plastic"
        ],
        rotations: "FlipH",
        externalHeat: 0.25,
        width: 1,
        height: 3,
        hp: 30,
        mass: 100.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    hvac: {
      BottleEmptierGas: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 3,
        hp: 30,
        mass: 100.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      GasConduitDiseaseSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasConduitElementSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasConduitTemperatureSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasBottler: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 2,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasConduitBridge: {
        thermalConductivity: 1.0,
        locationRule: "Conduit",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 10,
        mass: 50.0,
        deconstructable: true
      },
      GasConduit: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      GasConduitRadiant: {
        thermalConductivity: 2.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasFilter: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        electrityConsummation: [
          120.0
        ],
        width: 3,
        height: 1,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      GasLimitValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasLogicValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          10.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasMiniPump: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Plastic"
        ],
        rotations: "R360",
        electrityConsummation: [
          60.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasPump: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        width: 2,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasValve: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasVent: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GasVentHighPressure: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 250.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      InsulatedGasConduit: {
        thermalConductivity: 0.03125,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 400.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      ModularLaunchpadPortGas: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Load"
      },
      ModularLaunchpadPortGasUnloader: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 2,
        height: 3,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ],
        mode: "Unload"
      }
    },
    base: {
      BunkerDoor: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Steel"
        ],
        rotations: "R90",
        electrityConsummation: [
          120.0
        ],
        width: 4,
        height: 1,
        hp: 1000,
        highTempWarning: 1273.15,
        highTempFatal: 533.15,
        mass: 500.0,
        floodThreshold: 0.35,
        deconstructable: true
      },
      BunkerTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Steel"
        ],
        width: 1,
        height: 1,
        hp: 1000,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      CarpetTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw",
          "BuildingFiber"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 202.0,
        decor: 20.0,
        decorRadius: 4.0,
        deconstructable: true
      },
      Door: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      ExobaseHeadquarters: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 3,
        height: 3,
        hp: 250,
        mass: 50.0,
        decor: 30.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      ExteriorWall: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 0.0,
        deconstructable: true
      },
      FirePole: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasPermeableMembrane: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      GasReservoir: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 5,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      GlassTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Transparent"
        ],
        width: 1,
        height: 1,
        hp: 100,
        transparent: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      InsulationTile: {
        thermalConductivity: 0.01,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 400.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      Ladder: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LadderFast: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LiquidReservoir: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ManualPressureDoor: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true
      },
      MeshTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      MetalTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true
      },
      ObjectDispenser: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      PlasticTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      PressureDoor: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        electrityConsummation: [
          120.0
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true
      },
      StorageLocker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      StorageLockerSmart: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          60.0
        ],
        externalHeat: 0.125,
        width: 1,
        height: 2,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      StorageTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal",
          "Glass"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 200.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        storages: [
          {
            Item1: "external",
            Item2: [],
            Item3: 1000.0
          }
        ]
      },
      Tile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      TravelTube: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      TravelTubeEntrance: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          960.0
        ],
        width: 3,
        height: 2,
        hp: 100,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      TravelTubeWallBridge: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Plastic"
        ],
        rotations: "R90",
        width: 1,
        height: 1,
        hp: 100,
        mass: 100.0,
        deconstructable: true
      }
    },
    automation: {
      Checkpoint: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          10.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      CometDetector: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        width: 2,
        height: 4,
        hp: 30,
        mass: 25.0,
        floodThreshold: 0.35,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      FloorSwitch: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicAlarm: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicCounter: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 3,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicCritterCountSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicDiseaseSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 75.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicDuplicantSensor: {
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicElementSensorGas: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        floodThreshold: 0.35,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicElementSensorLiquid: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicGateAND: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateOR: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateXOR: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateNOT: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateBUFFER: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateFILTER: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateMultiplexer: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 4,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicGateDemultiplexer: {
        thermalConductivity: 0.05,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 4,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicHEPSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicHammer: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        electrityConsummation: [
          60.0
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicInterasteroidReceiver: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicInterasteroidSender: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 100.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      LogicLightSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal",
          "Transparent"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 50.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicMemory: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 2,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      LogicPressureSensorGas: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicPressureSensorLiquid: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRadiationSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbonBridge: {
        thermalConductivity: 1.0,
        locationRule: "LogicBridge",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbon: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbonReader: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicRibbonWriter: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicSwitch: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 25.0,
        deconstructable: true
      },
      LogicTemperatureSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicTimeOfDaySensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicTimerSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicWattageSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicWireBridge: {
        thermalConductivity: 1.0,
        locationRule: "LogicBridge",
        materialCategory: [
          "RefinedMetal"
        ],
        rotations: "R360",
        width: 3,
        height: 1,
        hp: 30,
        mass: 5.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      LogicWire: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        hp: 10,
        mass: 5.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      }
    },
    rocketry: {
      ClusterTelescope: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.125,
        width: 3,
        height: 3,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        providesO2: false,
        rangeMax: 3.0
      },
      ClusterTelescopeEnclosed: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.125,
        width: 4,
        height: 6,
        hp: 30,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true,
        providesO2: true,
        rangeMax: 4.0
      },
      Gantry: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Steel"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          1200.0
        ],
        externalHeat: 1.0,
        internalHeat: 1.0,
        width: 6,
        height: 2,
        hp: 30,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      LandingBeacon: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          60.0
        ],
        width: 1,
        height: 3,
        invincible: true,
        highTempWarning: 398.15,
        highTempFatal: 533.15,
        mass: 100.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      LaunchPad: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        width: 7,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 800.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ]
      },
      LogicClusterLocationSensor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "RefinedMetal"
        ],
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true
      },
      MissileLauncher: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 3,
        height: 5,
        hp: 250,
        mass: 400.0,
        deconstructable: true,
        enableable: true,
        lauchSpeed: 30.0,
        rotationSpeed: 100.0,
        rangeMax: 32.0,
        rangeMin: 16.0,
        scanningAngle: 50.0,
        maxAngle: 80.0
      },
      MissionControlCluster: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          960.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 3,
        height: 3,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 400.0,
        floodThreshold: 0.35,
        decor: -5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true,
        scanLeft: 1.0,
        scanRight: 1.0
      },
      ModularLaunchpadPortBridge: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        notInRocket: true,
        width: 1,
        height: 2,
        hp: 1000,
        highTempWarning: 2273.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: true,
        enableable: true,
        links: [
          "LaunchPad",
          "ModularLaunchpadPort"
        ]
      },
      RailGun: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          240.0
        ],
        externalHeat: 0.5,
        internalHeat: 2.0,
        width: 5,
        height: 6,
        hp: 250,
        mass: 400.0,
        deconstructable: true,
        enableable: true
      },
      RailGunPayloadOpener: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          120.0
        ],
        internalHeat: 0.5,
        width: 3,
        height: 3,
        hp: 250,
        mass: 100.0,
        deconstructable: true,
        enableable: true
      },
      RocketControlStation: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        onlyInRocket: true,
        width: 2,
        height: 2,
        hp: 30,
        mass: 100.0,
        decor: 15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorGasInput: {
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorGasOutput: {
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorLiquidInput: {
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorLiquidOutput: {
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorPowerPlug: {
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorSolidInput: {
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      },
      RocketInteriorSolidOutput: {
        thermalConductivity: 1.0,
        locationRule: "OnRocketEnvelope",
        materialCategory: [
          "Metal"
        ],
        rotations: "R360",
        onlyInRocket: true,
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true
      }
    },
    Gravitas: {
      FacilityBackWallWindow: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass"
        ],
        rotations: "R90",
        width: 1,
        height: 6,
        hp: 30,
        mass: 25.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      FossilDig: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Fossil"
        ],
        width: 5,
        height: 3,
        hp: 30,
        mass: 2000.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Fossil",
        deconstructable: false
      },
      GravitasContainer: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      GravitasCreatureManipulator: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 3,
        height: 4,
        hp: 250,
        mass: 800.0,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Steel",
        deconstructable: false,
        enableable: true
      },
      GravitasDoor: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 3,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      GravitasLabLight: {
        thermalConductivity: 1.0,
        locationRule: "OnCeiling",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 25.0,
        deconstructable: true,
        enableable: true
      },
      MassiveHeatSink: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        externalHeat: -16.0,
        internalHeat: -64.0,
        width: 4,
        height: 4,
        hp: 100,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Iron",
        deconstructable: false,
        enableable: true
      },
      MegaBrainTank: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 7,
        height: 7,
        invincible: true,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -20.0,
        decorRadius: 5.0,
        primaryElement: "Steel",
        deconstructable: false,
        enableable: true
      },
      MorbRoverMaker: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 5,
        height: 4,
        hp: 250,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Steel",
        deconstructable: false,
        enableable: true
      },
      POIDoorInternal: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 1,
        height: 2,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 100.0,
        deconstructable: true
      },
      PropGravitasLabWall: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R90",
        width: 2,
        height: 3,
        hp: 30,
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasLabWindow: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass"
        ],
        width: 2,
        height: 3,
        hp: 30,
        mass: 5.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasLabWindowHorizontal: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "Glass"
        ],
        width: 3,
        height: 2,
        hp: 30,
        mass: 5.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Glass",
        deconstructable: true,
        enableable: true
      },
      PropGravitasWall: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        hp: 30,
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Granite",
        deconstructable: true,
        enableable: true
      },
      WarpConduitReceiver: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 4,
        height: 3,
        invincible: true,
        mass: 100.0,
        primaryElement: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      WarpConduitSender: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 4,
        height: 3,
        invincible: true,
        mass: 400.0,
        primaryElement: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      ClustercraftInteriorDoor: {
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropLadder: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Polypropylene"
      },
      GeneShuffler: {
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      FossilRock: {
        mass: 4000.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Fossil"
      },
      FossilResin: {
        mass: 4000.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Fossil"
      },
      FossilIce: {
        mass: 4000.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Fossil"
      },
      PropGravitasLabTable: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasJar2: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasJar1: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasHandScanner: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasFloorRobot: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasFirstAidKit: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasDisplay4: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasRobitcTable: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasDeskPodium: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasCreaturePoster: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasCeilingRobot: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityWallDegree: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityTable: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityStatue: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityPainting: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityHangingLight: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropGravitasDecorativeWindow: {
        mass: 50.0,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Glass"
      },
      PropFacilityGlobeDroors: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropGravitasShelf: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropReceptionDesk: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      WarpReceiver: {
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      WarpPortal: {
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      VendingMachine: {
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      SetLocker: {
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropGravitasSmallSeedLocker: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      CryoTank: {
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropLight: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropTallPlant: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Polypropylene"
      },
      PropTable: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSurfaceSatellite3: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSurfaceSatellite2: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSurfaceSatellite1: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      },
      PropSkeleton: {
        mass: 50.0,
        decor: 30.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      PropFacilityDisplay: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityDisplay2: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityDisplay3: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityDesk: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityCouch: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityChandelier: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropFacilityChairFlip: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropFacilityChair: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Granite"
      },
      PropElevator: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropDesk: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Steel"
      },
      PropClock: {
        mass: 50.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Unobtanium"
      }
    },
    hep: {
      HEPBattery: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        electrityConsummation: [
          120.0
        ],
        externalHeat: 0.25,
        internalHeat: 1.0,
        width: 3,
        height: 3,
        hp: 30,
        mass: 400.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true,
        enableable: true,
        launchRate: 1.0,
        radboltDecay: 0.5,
        radboltStorage: 100.0
      },
      HEPBridgeTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Plastic"
        ],
        rotations: "R360",
        width: 2,
        height: 1,
        hp: 100,
        mass: 200.0,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: true
      },
      HighEnergyParticleRedirector: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      HighEnergyParticleSpawner: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        electrityConsummation: [
          480.0
        ],
        externalHeat: 1.0,
        internalHeat: 4.0,
        width: 1,
        height: 2,
        hp: 30,
        mass: 400.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      ManualHighEnergyParticleSpawner: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 3,
        hp: 30,
        mass: 800.0,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      },
      NuclearReactor: {
        thermalConductivity: 0.1,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 5,
        height: 6,
        invincible: true,
        mass: 800.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: true
      },
      RadiationLight: {
        thermalConductivity: 1.0,
        locationRule: "OnWall",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        electrityConsummation: [
          60.0
        ],
        internalHeat: 0.5,
        width: 1,
        height: 1,
        hp: 10,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 50.0,
        floodThreshold: 0.35,
        deconstructable: true,
        enableable: true
      },
      UraniumCentrifuge: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "RefinedMetal",
          "Plastic"
        ],
        electrityConsummation: [
          480.0
        ],
        externalHeat: 0.125,
        internalHeat: 0.5,
        width: 3,
        height: 4,
        hp: 100,
        mass: 900.0,
        floodThreshold: 0.35,
        decor: -10.0,
        decorRadius: 2.0,
        deconstructable: true,
        enableable: true
      }
    },
    Quest: {
      LonelyMinionHouse: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Steel"
        ],
        electrityConsummation: [
          60.0
        ],
        width: 4,
        height: 6,
        hp: 1000,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: -25.0,
        decorRadius: 6.0,
        deconstructable: false
      },
      LonelyMailBox: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: false,
        enableable: true
      },
      TemporalTearOpener: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 3,
        height: 4,
        invincible: true,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 800.0,
        floodThreshold: 0.35,
        decor: 15.0,
        decorRadius: 3.0,
        primaryElement: "Unobtanium",
        deconstructable: false,
        enableable: true
      },
      FossilBitsLarge: {
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Fossil"
      },
      FossilBitsSmall: {
        mass: 1500.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Fossil"
      },
      SapTree: {
        mass: 1.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      }
    },
    Lander: {
      ScoutLander: {
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      },
      PioneerLander: {
        mass: 400.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      }
    }
  },
  NONE: {
    NONE: {
      DevGenerator: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        generatorWattageRating: 100000.0,
        width: 1,
        height: 1,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 25.0,
        debug: true
      },
      DevHEPSpawner: {
        thermalConductivity: 1.0,
        locationRule: "NotInTiles",
        materialCategory: [
          "BuildableRaw"
        ],
        rotations: "R360",
        width: 1,
        height: 1,
        mass: 400.0,
        debug: true
      },
      DevLifeSupport: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        mass: 800.0,
        debug: true
      },
      DevLightGenerator: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        highTempWarning: 348.15,
        highTempFatal: 533.15,
        mass: 25.0,
        debug: true
      },
      DevPumpGas: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        mass: 50.0,
        debug: true
      },
      DevPumpLiquid: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        mass: 400.0,
        debug: true
      },
      DevPumpSolid: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 2,
        height: 2,
        mass: 50.0,
        debug: true
      },
      DevRadiationGenerator: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        width: 1,
        height: 1,
        mass: 25.0,
        debug: true
      },
      GravitasPedestal: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 2,
        hp: 10,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: true,
        enableable: true
      },
      Headquarters: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        width: 4,
        height: 4,
        hp: 250,
        mass: 2000.0,
        decor: 30.0,
        decorRadius: 6.0,
        deconstructable: true,
        enableable: true
      },
      POIBunkerExteriorDoor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipH",
        width: 1,
        height: 2,
        invincible: true,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        deconstructable: false,
        enableable: true
      },
      POIFacilityDoor: {
        thermalConductivity: 1.0,
        locationRule: "Anywhere",
        materialCategory: [
          "Metal"
        ],
        rotations: "R90",
        width: 2,
        height: 3,
        invincible: true,
        mass: 200.0,
        decor: -15.0,
        decorRadius: 3.0,
        primaryElement: "Steel",
        deconstructable: true,
        enableable: true
      },
      RocketEnvelopeWindowTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Transparent"
        ],
        width: 1,
        height: 1,
        invincible: true,
        transparent: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorGasInputPort: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorGasOutputPort: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorLiquidInputPort: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketInteriorLiquidOutputPort: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "RefinedMetal"
        ],
        width: 1,
        height: 1,
        invincible: true,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        deconstructable: false
      },
      RocketWallTile: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "Steel"
        ],
        width: 1,
        height: 1,
        mass: 100.0,
        debug: true
      },
      StaterpillarGenerator: {
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        generatorWattageRating: 1600.0,
        externalHeat: 2.0,
        internalHeat: 4.0,
        width: 1,
        height: 2,
        hp: 1000,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      StaterpillarGasConnector: {
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 2,
        hp: 1000,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      StaterpillarLiquidConnector: {
        thermalConductivity: 1.0,
        locationRule: "OnFoundationRotatable",
        materialCategory: [
          "Metal"
        ],
        rotations: "FlipV",
        width: 1,
        height: 2,
        hp: 1000,
        mass: 200.0,
        deconstructable: false,
        enableable: true
      },
      TeleportalPad: {
        thermalConductivity: 1.0,
        locationRule: "OnFloor",
        materialCategory: [
          "Metal"
        ],
        electrityConsummation: [
          1600.0
        ],
        externalHeat: 16.0,
        internalHeat: 64.0,
        width: 4,
        height: 4,
        hp: 250,
        mass: 2000.0,
        decor: 30.0,
        decorRadius: 6.0,
        primaryElement: "Unobtanium",
        deconstructable: true,
        enableable: true
      },
      TilePOI: {
        thermalConductivity: 1.0,
        locationRule: "Tile",
        materialCategory: [
          "BuildableRaw"
        ],
        width: 1,
        height: 1,
        mass: 100.0,
        debug: true
      },
      LandingPod: {
        mass: 2000.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      MachineParts: {
        mass: 5.0,
        primaryElement: "Creature"
      },
      FoodSplat: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      StickerBomb: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      RailGunPayload: {
        mass: 200.0,
        primaryElement: "Creature"
      },
      DebrisPayload: {
        mass: 100.0,
        primaryElement: "Creature"
      },
      EscapePod: {
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        deconstructable: true
      }
    }
  },
  Element: {
    Solid: {
      Algae: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 4.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      BleachStone: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 43.0,
        hardness: 50.0,
        shc: 0.5,
        strength: 1.0,
        radiationAbsorptionFactor: 0.73,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      OxyRock: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 43.0,
        hardness: 10.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.82,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SlimeMold: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 4.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ToxicSand: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CrushedIce: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 18.01528,
        hardness: 10.0,
        shc: 2.05,
        strength: 0.4,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Diamond: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 12.0107,
        hardness: 250.0,
        shc: 0.516,
        strength: 2.5,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 80.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Isoresin: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 162.14,
        hardness: 10.0,
        shc: 1.3,
        strength: 0.4,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.17,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Sucrose: {
        dlc: [
          "Space Out"
        ],
        molarMass: 342.3,
        hardness: 5.0,
        shc: 1.255,
        strength: 0.1,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MilkFat: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 42.08,
        hardness: 1.0,
        shc: 1.92,
        strength: 0.4,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Niobium: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 92.9,
        hardness: 50.0,
        shc: 0.265,
        strength: 0.8,
        radiationAbsorptionFactor: 0.49,
        thermalConductivity: 54.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MilkIce: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 18.01528,
        hardness: 25.0,
        shc: 3.4,
        strength: 1.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Cuprite: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 143.09,
        hardness: 25.0,
        shc: 0.386,
        strength: 0.7,
        radiationAbsorptionFactor: 0.56,
        thermalConductivity: 4.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Copper: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 63.546,
        hardness: 25.0,
        shc: 0.385,
        strength: 0.8,
        radiationAbsorptionFactor: 0.61,
        thermalConductivity: 60.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CrushedRock: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.2,
        strength: 0.7,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SuperInsulator: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 341.76,
        hardness: 200.0,
        shc: 5.57,
        strength: 2.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 1E-05,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      BrineIce: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 18.01528,
        hardness: 25.0,
        shc: 3.4,
        strength: 1.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidViscoGel: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 95.0,
        hardness: 2.0,
        shc: 1.55,
        strength: 0.1,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.45,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Ceramic: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 25.0,
        hardness: 50.0,
        shc: 0.84,
        strength: 1.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 0.62,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Cobaltite: {
        dlc: [
          "Space Out"
        ],
        molarMass: 165.9,
        hardness: 25.0,
        shc: 0.42,
        strength: 0.9,
        radiationAbsorptionFactor: 0.58,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Fertilizer: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.83,
        strength: 0.2,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidCrudeOil: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 500.0,
        hardness: 2.0,
        shc: 1.69,
        strength: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Wolframite: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 150.0,
        hardness: 150.0,
        shc: 0.134,
        strength: 0.8,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 15.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Polypropylene: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 42.08,
        hardness: 1.0,
        shc: 1.92,
        strength: 0.4,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidNaphtha: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 102.2,
        hardness: 2.0,
        shc: 2.191,
        strength: 0.1,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Tungsten: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 183.84,
        hardness: 200.0,
        shc: 0.134,
        strength: 0.9,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 60.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      RefinedCarbon: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 12.0107,
        hardness: 2.0,
        shc: 1.74,
        strength: 0.8,
        radiationAbsorptionFactor: 0.84,
        thermalConductivity: 3.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Steel: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 54.97,
        hardness: 50.0,
        shc: 0.49,
        strength: 2.0,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 54.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Phosphorite: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 95.61,
        hardness: 25.0,
        shc: 0.15,
        strength: 0.8,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidHydrogen: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 44.1,
        hardness: 2.0,
        shc: 2.4,
        strength: 0.25,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Lead: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 55.845,
        hardness: 10.0,
        shc: 0.128,
        strength: 0.8,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 35.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Sulfur: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 5.0,
        shc: 0.7,
        strength: 0.1,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Lime: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 200.0,
        hardness: 50.0,
        shc: 0.834,
        strength: 0.2,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidChlorine: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 34.453,
        hardness: 25.0,
        shc: 0.48,
        strength: 0.5,
        radiationAbsorptionFactor: 0.73,
        thermalConductivity: 0.75,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidNuclearWaste: {
        dlc: [
          "Space Out"
        ],
        molarMass: 196.966568,
        shc: 7.44,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Obsidian: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 200.0,
        shc: 0.2,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidPetroleum: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 82.2,
        hardness: 2.0,
        shc: 1.76,
        strength: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidSuperCoolant: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 250.0,
        hardness: 2.0,
        shc: 8.44,
        strength: 0.1,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 9.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      IgneousRock: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 25.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      EnrichedUranium: {
        dlc: [
          "Space Out"
        ],
        molarMass: 120.0,
        hardness: 250.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Gold: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 196.966568,
        hardness: 2.0,
        shc: 0.129,
        strength: 0.7,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 60.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Rust: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 159.6882,
        hardness: 25.0,
        shc: 0.449,
        strength: 0.9,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Corium: {
        dlc: [
          "Space Out"
        ],
        molarMass: 196.966568,
        hardness: 251.0,
        shc: 7.44,
        strength: 0.45,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Phosphorus: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 30.9737625,
        shc: 0.7697,
        strength: 0.85,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Granite: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 80.0,
        shc: 0.79,
        strength: 1.5,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 3.39,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidCarbonDioxide: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 44.01,
        hardness: 2.0,
        shc: 0.846,
        strength: 0.6,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Cobalt: {
        dlc: [
          "Space Out"
        ],
        molarMass: 58.9,
        hardness: 75.0,
        shc: 0.42,
        strength: 0.9,
        radiationAbsorptionFactor: 0.63,
        thermalConductivity: 100.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      UraniumOre: {
        dlc: [
          "Space Out"
        ],
        molarMass: 120.0,
        hardness: 150.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidPropane: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 44.1,
        hardness: 10.0,
        shc: 2.4,
        strength: 0.5,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      AluminumOre: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 143.09,
        hardness: 25.0,
        shc: 0.91,
        strength: 0.7,
        radiationAbsorptionFactor: 0.72,
        thermalConductivity: 20.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SedimentaryRock: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.2,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Fullerene: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 12.0107,
        hardness: 250.0,
        shc: 0.95,
        strength: 1.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 50.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      GoldAmalgam: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 95.61,
        hardness: 2.0,
        shc: 0.15,
        strength: 0.8,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Salt: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 5.0,
        shc: 0.7,
        strength: 0.1,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Sand: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Snow: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 18.01528,
        hardness: 10.0,
        shc: 2.05,
        strength: 0.3,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.545,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SandStone: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.8,
        strength: 0.5,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.9,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Glass: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 25.0,
        hardness: 10.0,
        shc: 0.84,
        strength: 1.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 1.11,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Clay: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 200.0,
        hardness: 5.0,
        shc: 0.92,
        strength: 0.2,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Ice: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 18.01528,
        hardness: 25.0,
        shc: 2.05,
        strength: 1.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.18,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Graphite: {
        dlc: [
          "Space Out"
        ],
        molarMass: 12.0107,
        shc: 0.71,
        strength: 0.1,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 8.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ToxicMud: {
        dlc: [
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Mud: {
        dlc: [
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 10.0,
        shc: 0.83,
        strength: 0.25,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Carbon: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 12.0107,
        hardness: 2.0,
        shc: 0.71,
        strength: 0.8,
        radiationAbsorptionFactor: 0.84,
        thermalConductivity: 1.25,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidOxygen: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 2.0,
        shc: 1.01,
        strength: 0.5,
        radiationAbsorptionFactor: 0.82,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Creature: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 25.0,
        hardness: 10.0,
        shc: 3.47,
        strength: 1.0,
        radiationAbsorptionFactor: 0.25,
        thermalConductivity: 0.6,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      DepletedUranium: {
        dlc: [
          "Space Out"
        ],
        molarMass: 120.0,
        hardness: 250.0,
        shc: 1.0,
        strength: 1.0,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Katairite: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 341.76,
        hardness: 150.0,
        shc: 4.0,
        strength: 2.0,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 1E-05,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidMethane: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 16.044,
        hardness: 2.0,
        shc: 2.191,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.03,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      HardPolypropylene: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 100.016,
        hardness: 1.0,
        shc: 1.5,
        strength: 0.4,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 0.25,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MaficRock: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 1.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Iron: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 55.845,
        hardness: 50.0,
        shc: 0.449,
        strength: 1.0,
        radiationAbsorptionFactor: 0.66,
        thermalConductivity: 55.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Regolith: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 2.0,
        shc: 0.2,
        strength: 0.5,
        minHorizontalFlow: 50.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidResin: {
        dlc: [
          "Space Out"
        ],
        molarMass: 52.5,
        hardness: 10.0,
        shc: 1.3,
        strength: 0.2,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.17,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      TempConductorSolid: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 174.35,
        hardness: 80.0,
        shc: 0.622,
        strength: 0.8,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 220.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      IronOre: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 159.6882,
        hardness: 25.0,
        shc: 0.449,
        strength: 0.9,
        radiationAbsorptionFactor: 0.61,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Dirt: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        hardness: 2.0,
        shc: 1.48,
        strength: 0.2,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      DirtyIce: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 25.0,
        hardness: 10.0,
        shc: 3.05,
        strength: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Fossil: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 200.0,
        hardness: 50.0,
        shc: 0.91,
        strength: 0.2,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Unobtanium: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 10000.0,
        hardness: 255.0,
        shc: 0.0,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 0.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SolidEthanol: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 46.07,
        hardness: 250.0,
        shc: 2.46,
        strength: 1.0,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 20.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      FoolsGold: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 95.61,
        hardness: 25.0,
        shc: 0.386,
        strength: 0.7,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 4.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Aluminum: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 55.845,
        hardness: 25.0,
        shc: 0.91,
        strength: 1.0,
        radiationAbsorptionFactor: 0.77,
        thermalConductivity: 205.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      }
    },
    Liquid: {
      DirtyWater: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 20.0,
        shc: 4.179,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.58,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      NuclearWaste: {
        dlc: [
          "Space Out"
        ],
        molarMass: 196.966568,
        shc: 7.44,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidOxygen: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 15.9994,
        shc: 1.01,
        maxCompression: 1.01,
        viscosity: 200.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.82,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ViscoGel: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 10.0,
        shc: 1.55,
        maxCompression: 1.01,
        viscosity: 1.0,
        minHorizontalFlow: 10.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.45,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenAluminum: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 55.845,
        shc: 0.91,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.77,
        thermalConductivity: 20.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenLead: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 196.966568,
        shc: 0.128,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.85,
        thermalConductivity: 11.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidCarbonDioxide: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 44.01,
        shc: 0.846,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CrudeOil: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 500.0,
        shc: 1.69,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenGlass: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        shc: 0.2,
        maxCompression: 1.01,
        viscosity: 60.0,
        minHorizontalFlow: 50.0,
        minVerticalFlow: 20.0,
        radiationAbsorptionFactor: 0.65,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidSulfur: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 32.0,
        shc: 0.7,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenGold: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 196.966568,
        shc: 0.1291,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 6.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Magma: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        shc: 1.0,
        maxCompression: 1.01,
        viscosity: 60.0,
        minHorizontalFlow: 50.0,
        minVerticalFlow: 20.0,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Chlorine: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 34.453,
        shc: 0.48,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.73,
        thermalConductivity: 0.0081,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidHydrogen: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 1.00794,
        shc: 2.4,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.9,
        thermalConductivity: 0.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Resin: {
        dlc: [
          "Space Out"
        ],
        molarMass: 52.5,
        shc: 1.11,
        maxCompression: 1.01,
        viscosity: 1.1,
        minHorizontalFlow: 1.1,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidPropane: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 44.1,
        shc: 2.4,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenTungsten: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 183.84,
        shc: 0.134,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.35,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Petroleum: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 82.2,
        shc: 1.76,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenSalt: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 32.0,
        shc: 0.7,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenCobalt: {
        dlc: [
          "Space Out"
        ],
        molarMass: 58.9,
        shc: 0.42,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.63,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Brine: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 22.0,
        shc: 3.4,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SuperCoolant: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 250.0,
        shc: 8.44,
        maxCompression: 1.01,
        viscosity: 150.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 9.46,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Ethanol: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 46.07,
        shc: 2.46,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.171,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Milk: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 23.0,
        shc: 4.1,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidMethane: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 16.044,
        shc: 2.191,
        maxCompression: 1.01,
        viscosity: 180.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.03,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenIron: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 55.845,
        shc: 0.449,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 30.0,
        minVerticalFlow: 3.0,
        radiationAbsorptionFactor: 0.66,
        thermalConductivity: 4.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenCarbon: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 12.0107,
        shc: 0.71,
        maxCompression: 1.01,
        viscosity: 150.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.84,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Naphtha: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 102.2,
        shc: 2.191,
        maxCompression: 1.01,
        viscosity: 30.0,
        minHorizontalFlow: 10.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.6,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenSucrose: {
        dlc: [
          "Space Out"
        ],
        molarMass: 32.0,
        shc: 1.255,
        maxCompression: 1.01,
        viscosity: 50.0,
        minHorizontalFlow: 0.1,
        minVerticalFlow: 0.1,
        radiationAbsorptionFactor: 0.7,
        thermalConductivity: 0.15,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LiquidPhosphorus: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 30.9737625,
        shc: 0.7697,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 2.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.75,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenSteel: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 63.546,
        shc: 0.386,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.74,
        thermalConductivity: 80.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenNiobium: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 92.9,
        shc: 0.265,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 10.0,
        radiationAbsorptionFactor: 0.49,
        thermalConductivity: 54.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Water: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 18.01528,
        shc: 4.179,
        maxCompression: 1.01,
        viscosity: 125.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SaltWater: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 21.0,
        shc: 4.1,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 0.01,
        minVerticalFlow: 0.01,
        radiationAbsorptionFactor: 0.8,
        thermalConductivity: 0.609,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenUranium: {
        dlc: [
          "Space Out"
        ],
        molarMass: 196.966568,
        shc: 1.69,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 25.0,
        minVerticalFlow: 1.0,
        radiationAbsorptionFactor: 0.3,
        thermalConductivity: 2.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      MoltenCopper: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 63.546,
        shc: 0.386,
        maxCompression: 1.01,
        viscosity: 100.0,
        minHorizontalFlow: 20.0,
        minVerticalFlow: 2.0,
        radiationAbsorptionFactor: 0.61,
        thermalConductivity: 12.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      }
    },
    Gas: {
      SulfurGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 32.0,
        shc: 0.7,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SaltGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        shc: 0.88,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.444,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      NiobiumGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 92.9,
        shc: 0.265,
        flow: 0.1,
        radiationAbsorptionFactor: 0.05,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Oxygen: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 15.9994,
        shc: 1.005,
        flow: 0.12,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.024,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CobaltGas: {
        dlc: [
          "Space Out"
        ],
        molarMass: 58.9,
        shc: 0.42,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SteelGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 54.97,
        shc: 0.49,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ChlorineGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 34.453,
        shc: 0.48,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.0081,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Hydrogen: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 1.00794,
        shc: 2.4,
        flow: 0.1,
        radiationAbsorptionFactor: 0.09,
        thermalConductivity: 0.168,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SourGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 19.044,
        shc: 1.898,
        flow: 0.1,
        radiationAbsorptionFactor: 0.05,
        thermalConductivity: 0.018,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Steam: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 18.01528,
        shc: 4.179,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.184,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Methane: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 16.044,
        shc: 2.191,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.035,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      GoldGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 196.966568,
        shc: 0.1291,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      EthanolGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 46.07,
        shc: 2.148,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.167,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      RockGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 50.0,
        shc: 1.0,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.1,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CarbonGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 12.0107,
        shc: 0.71,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 1.7,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      SuperCoolantGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 190.0,
        shc: 8.44,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.2,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      AluminumGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 63.546,
        shc: 0.91,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 2.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      TungstenGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 183.84,
        shc: 0.134,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      ContaminatedOxygen: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 15.9994,
        shc: 1.01,
        flow: 0.12,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.024,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      LeadGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 196.966568,
        shc: 0.128,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 3.5,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      Fallout: {
        dlc: [
          "Space Out"
        ],
        molarMass: 92.9,
        shc: 0.265,
        flow: 0.1,
        radiationAbsorptionFactor: 0.03,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      IronGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 55.845,
        shc: 0.449,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      PhosphorusGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 30.9737625,
        shc: 0.7697,
        flow: 0.1,
        radiationAbsorptionFactor: 0.07,
        thermalConductivity: 0.236,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CarbonDioxide: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 44.01,
        shc: 0.846,
        flow: 0.1,
        radiationAbsorptionFactor: 0.08,
        thermalConductivity: 0.0146,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      },
      CopperGas: {
        dlc: [
          "Base",
          "Space Out"
        ],
        molarMass: 63.546,
        shc: 0.386,
        flow: 0.1,
        radiationAbsorptionFactor: 0.06,
        thermalConductivity: 1.0,
        decor: -10.0,
        decorRadius: 1.0,
        clearable: true
      }
    },
    Other: {
      HighEnergyParticle: {}
    }
  },
  Space: {
    Comet: {
      RockComet: {
        mass: 1.0,
        primaryElement: "Regolith"
      },
      IronComet: {
        mass: 1.0,
        primaryElement: "Iron"
      },
      CopperCometConfig: {
        mass: 1.0,
        primaryElement: "Cuprite"
      },
      GoldComet: {
        mass: 1.0,
        primaryElement: "GoldAmalgam"
      },
      FullereneComet: {
        mass: 1.0,
        primaryElement: "Fullerene"
      },
      BleachStoneComet: {
        mass: 1.0,
        primaryElement: "BleachStone"
      },
      OxyliteComet: {
        mass: 1.0,
        primaryElement: "OxyRock"
      },
      PhosphoricComet: {
        mass: 1.0,
        primaryElement: "Phosphorite"
      },
      AlgaeComet: {
        mass: 1.0,
        primaryElement: "Algae"
      },
      LightDustComet: {
        mass: 1.0,
        primaryElement: "Regolith"
      },
      HardIceComet: {
        mass: 1.0,
        primaryElement: "CrushedIce"
      },
      SlimeComet: {
        mass: 1.0,
        primaryElement: "SlimeMold"
      },
      UraniumComet: {
        mass: 1.0,
        primaryElement: "UraniumOre"
      },
      GassyMoo: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      NuclearWasteComet: {
        mass: 1.0,
        primaryElement: "Corium"
      },
      DustComet: {
        mass: 1.0,
        primaryElement: "Regolith"
      },
      SnowballComet: {
        mass: 1.0,
        primaryElement: "Snow"
      }
    },
    Shower: {
      ClusterMapMeteorShower_Biological: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Snow: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Ice: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Copper: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Iron: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Gold: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Uranium: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_HeavyDust: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_LightDust: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Moo: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Regolith: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_Oxylite: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      },
      ClusterMapMeteorShower_BleachStone: {
        mass: 25.0,
        primaryElement: "Unobtanium"
      }
    }
  },
  Artifact: {
    Any: {
      artifact_sandstone: {
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_officemug: {
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_modernart: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_shieldgenerator: {
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_grubstatue: {
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_eggrock: {
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_hatchfossil: {
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_rocktornado: {
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_magmalamp: {
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_rainboweggrock: {
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_plasmalamp: {
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_moodring: {
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_reactormodel: {
        mass: 25.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      }
    },
    Terrestrial: {
      artifact_sink: {
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_rubikscube: {
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      },
      artifact_okayxray: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_blender: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_vhs: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_honeyjar: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_brickphone: {
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_stethoscope: {
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_oracle: {
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_dnamodel: {
        mass: 25.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      }
    },
    Space: {
      artifact_obelisk: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_moldavite: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_saxophone: {
        mass: 25.0,
        decor: 20.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      },
      artifact_ameliaswatch: {
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_teapot: {
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_robotarm: {
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_bioluminescentrock: {
        mass: 25.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature"
      },
      artifact_pacupercolator: {
        mass: 25.0,
        decor: 35.0,
        decorRadius: 6.0,
        primaryElement: "Creature"
      },
      artifact_solarsystem: {
        mass: 25.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      },
      artifact_moonmoonmoon: {
        mass: 25.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature"
      }
    },
    Quest: {
      keepsake_megabrain: {
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_crittermanipulator: {
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_lonelyminion: {
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_fossilhunt: {
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      keepsake_morbrovermaker: {
        mass: 25.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      }
    }
  },
  Misc: {
    Medicine: {
      IntermediateRadPill: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      IntermediateCure: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      IntermediateBooster: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicRadPill: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicCure: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicBooster: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Antihistamine: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      AdvancedCure: {
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Industrial: {
      WoodLog: {
        massPerUnit: 1.0,
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampLilyFlower: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ResearchDatabank: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      OrbitalResearchDatabank: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      CrabWoodShell: {
        massPerUnit: 100.0,
        mass: 100.0,
        primaryElement: "Creature"
      },
      BabyCrabWoodShell: {
        massPerUnit: 10.0,
        mass: 10.0,
        primaryElement: "Creature"
      },
      BabyCrabShell: {
        massPerUnit: 5.0,
        mass: 5.0,
        primaryElement: "Creature"
      },
      CrabShell: {
        massPerUnit: 10.0,
        mass: 10.0,
        primaryElement: "Creature"
      },
      MissileBasic: {
        mass: 10.0,
        primaryElement: "Iron"
      },
      GeneShufflerRecharge: {
        mass: 5.0,
        primaryElement: "Creature"
      },
      BasicFabric: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      GingerConfig: {
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Other: {
      TableSalt: {
        mass: 1.0,
        primaryElement: "Salt"
      },
      PowerStationTools: {
        mass: 5.0,
        primaryElement: "Creature"
      },
      FarmStationTools: {
        mass: 5.0,
        primaryElement: "Creature"
      },
      EggShell: {
        massPerUnit: 1.0,
        mass: 1.0,
        primaryElement: "Creature"
      },
      GasGrassHarvested: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      HeatCube: {
        mass: 1000.0,
        primaryElement: "Diamond"
      },
      RotPile: {
        mass: 1.0,
        decor: -15.0,
        decorRadius: 3.0,
        primaryElement: "Creature"
      }
    },
    Quest: {
      DreamJournal: {
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Dupe: {
      Minion: {
        hp: 100,
        mass: 30.0,
        primaryElement: "Creature",
        caloriesMax: 4000000.0,
        caloriesLoss: -1666.66663,
        carryAmount: 200.0
      }
    }
  },
  Food: {
    Cooked: {
      WormBasicFruit: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      WormBasicFood: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Tofu: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampFruit: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampDelights: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      WormSuperFood: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SpicyTofu: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SpiceBread: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ShellfishMeat: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SurfAndTurf: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      WormSuperFruit: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Salsa: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      RawEgg: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicForagePlant: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ForestForagePlant: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ColdWheatBread: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      CookedEgg: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      CookedFish: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      CookedMeat: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Curry: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      FieldRation: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      FishMeat: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      FriedMushBar: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      FriedMushroom: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      FruitCake: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Burger: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Lettuce: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Meat: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      MushBar: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Mushroom: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      MushroomWrap: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      PacuFillet: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Pancakes: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      PickledMeal: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      PlantMeat: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      PrickleFruit: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      Quiche: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      GrilledPrickleFruit: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BerryPie: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampForagePlant: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicPlantFood: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicPlantBar: {
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Dehydrated: {
      DehydratedSurfAndTurf: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSpicyTofu: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSpiceBread: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedSalsa: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedQuiche: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedFoodPackage: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedMushroomWrap: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedBerryPie: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      },
      DehydratedCurry: {
        mass: 1.0,
        primaryElement: "Polypropylene"
      }
    },
    Ingredient: {
      SpiceNut: {
        mass: 1.0,
        primaryElement: "Creature"
      }
    }
  },
  Critter: {
    SweepBot: {
      SweepBot: {
        battery: 9000.0,
        mass: 25.0,
        primaryElement: "Creature",
        batteryLoss: -17.1428566
      }
    },
    SquirrelSpecies: {
      Squirrel: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        timeWaitPlantSeed: {
          Item1: 60.0,
          Item2: 300.0
        },
        timeWaitClimbTree: {
          Item1: 60.0,
          Item2: 120.0
        },
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelHug: {
        hp: 25,
        mass: 100.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 4.0,
        timeWaitPlantSeed: {
          Item1: 60.0,
          Item2: 300.0
        },
        timeWaitClimbTree: {
          Item1: 60.0,
          Item2: 120.0
        },
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelHugBaby: {
        hp: 25,
        mass: 100.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 4.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      SquirrelBaby: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    StaterpillarSpecies: {
      Staterpillar: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarLiquid: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarGas: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarGasBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      StaterpillarLiquidBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    ScoutRover: {
      ScoutRover: {
        battery: 180000.0,
        hp: 100,
        mass: 100.0,
        primaryElement: "Creature",
        batteryLoss: -30.0,
        carryAmount: 200.0,
        deconstructable: true
      }
    },
    PuftSpecies: {
      Puft: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftOxylite: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftAlpha: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBleachstone: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftOxyliteBaby: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBaby: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftBleachstoneBaby: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PuftAlphaBaby: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    BeetaSpecies: {
      BeeHive: {
        hp: 25,
        mass: 100.0,
        decor: 5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        caloriesMax: 4.5E+07,
        caloriesLoss: -2500.0
      },
      Bee: {
        hp: 5,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 5.0,
        spacePerCritter: 4.0,
        happy: 4.0,
        glum: -1.0
      },
      BeeBaby: {
        hp: 5,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 2.0,
        spacePerCritter: 4.0,
        happy: 4.0,
        glum: -1.0
      }
    },
    DreckoSpecies: {
      Drecko: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DreckoPlastic: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DreckoPlasticBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DreckoBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1E+07,
        caloriesLoss: -3333.33325,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    GlomSpecies: {
      Glom: {
        hp: 25,
        mass: 25.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature"
      }
    },
    LightBugSpecies: {
      LightBugBlack: {
        hp: 5,
        mass: 5.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlue: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBug: {
        hp: 5,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugCrystal: {
        hp: 5,
        mass: 5.0,
        decor: 200.0,
        decorRadius: 8.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPink: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPurple: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugOrange: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBaby: {
        hp: 5,
        mass: 5.0,
        decor: 30.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPurpleBaby: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugPinkBaby: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugOrangeBaby: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugCrystalBaby: {
        hp: 5,
        mass: 5.0,
        decor: 200.0,
        decorRadius: 8.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlueBaby: {
        hp: 5,
        mass: 5.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      LightBugBlackBaby: {
        hp: 5,
        mass: 5.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 320000.0,
        caloriesLoss: -66.6666641,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    MoleSpecies: {
      Mole: {
        hp: 25,
        mass: 25.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 4.8E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleDelicacy: {
        hp: 25,
        mass: 25.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 2.4E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleDelicacyBaby: {
        hp: 25,
        mass: 25.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 2.4E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      MoleBaby: {
        hp: 25,
        mass: 25.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 4.8E+07,
        caloriesLoss: -8000.0,
        milkConsummer: true,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    MooSpecies: {
      Moo: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 1200000.0,
        caloriesLoss: -333.333344,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    MorbRover: {
      MorbRover: {
        battery: 180000.0,
        hp: 100,
        mass: 300.0,
        primaryElement: "Steel",
        batteryLoss: -30.0,
        carryAmount: 400.0,
        deconstructable: true
      }
    },
    OilFloaterSpecies: {
      Oilfloater: {
        hp: 25,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterDecor: {
        hp: 25,
        mass: 50.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterHighTemp: {
        hp: 25,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterHighTempBaby: {
        hp: 25,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterDecorBaby: {
        hp: 25,
        mass: 50.0,
        decor: 50.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      OilfloaterBaby: {
        hp: 25,
        mass: 50.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 600000.0,
        caloriesLoss: -200.0,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    HatchSpecies: {
      HatchVeggie: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Hatch: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchHard: {
        hp: 200,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchMetal: {
        hp: 400,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchBaby: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchMetalBaby: {
        hp: 400,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchVeggieBaby: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      HatchHardBaby: {
        hp: 200,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    CrabSpecies: {
      Crab: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabWood: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabFreshWater: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 100.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabFreshWaterBaby: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabWoodBaby: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      CrabBaby: {
        hp: 25,
        mass: 100.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 1000000.0,
        caloriesLoss: -166.666672,
        milkConsummer: true,
        spacePerCritter: 12.0,
        friends: [
          "CrabFriend"
        ],
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    PacuSpecies: {
      PacuCleaner: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuTropical: {
        hp: 25,
        mass: 200.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      Pacu: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 25.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuTropicalBaby: {
        hp: 25,
        mass: 200.0,
        decor: 25.0,
        decorRadius: 5.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      PacuCleanerBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 500000.0,
        caloriesLoss: -166.666672,
        spacePerCritter: 8.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    },
    DivergentSpecies: {
      DivergentBeetle: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 75.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentWorm: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 150.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentWormBaby: {
        hp: 25,
        mass: 200.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 16.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      },
      DivergentBeetleBaby: {
        hp: 25,
        mass: 50.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        age: 5.0,
        caloriesMax: 7000000.0,
        caloriesLoss: -1166.66663,
        milkConsummer: true,
        spacePerCritter: 12.0,
        happy: 4.0,
        glum: -1.0,
        miserable: -10.0
      }
    }
  },
  Egg: {
    SquirrelSpecies: {
      SquirrelEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      SquirrelHugEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    },
    StaterpillarSpecies: {
      StaterpillarEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      StaterpillarLiquidEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      StaterpillarGasEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    },
    PuftSpecies: {
      PuftEgg: {
        mass: 0.5,
        primaryElement: "Creature"
      },
      PuftOxyliteEgg: {
        mass: 0.5,
        primaryElement: "Creature"
      },
      PuftAlphaEgg: {
        mass: 0.5,
        primaryElement: "Creature"
      },
      PuftBleachstoneEgg: {
        mass: 0.5,
        primaryElement: "Creature"
      }
    },
    DreckoSpecies: {
      DreckoEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      DreckoPlasticEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    },
    LightBugSpecies: {
      LightBugBlackEgg: {
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugBlueEgg: {
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugEgg: {
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugCrystalEgg: {
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugPinkEgg: {
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugPurpleEgg: {
        mass: 0.2,
        primaryElement: "Creature"
      },
      LightBugOrangeEgg: {
        mass: 0.2,
        primaryElement: "Creature"
      }
    },
    MoleSpecies: {
      MoleEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      MoleDelicacyEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    },
    OilFloaterSpecies: {
      OilfloaterEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      OilfloaterDecorEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      OilfloaterHighTempEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    },
    HatchSpecies: {
      HatchVeggieEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      HatchEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      HatchHardEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      HatchMetalEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    },
    CrabSpecies: {
      CrabEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      CrabWoodEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      CrabFreshWaterEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    },
    PacuSpecies: {
      PacuCleanerEgg: {
        mass: 4.0,
        primaryElement: "Creature"
      },
      PacuTropicalEgg: {
        mass: 4.0,
        primaryElement: "Creature"
      },
      PacuEgg: {
        mass: 4.0,
        primaryElement: "Creature"
      }
    },
    DivergentSpecies: {
      DivergentBeetleEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      },
      DivergentWormEgg: {
        mass: 2.0,
        primaryElement: "Creature"
      }
    }
  },
  Seed: {
    Crop: {
      BasicFabricMaterialPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BasicSingleHarvestPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BeanPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ColdBreatherSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ColdWheatSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      CritterTrapPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      FilterPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ForestTreeSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      GasGrassSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SaltPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      PrickleFlowerSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SeaLettuceSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SpiceVineSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      OxyfernSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampHarvestPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      SwampLilySeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      WormPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      MushroomSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      }
    },
    Decor: {
      CactusPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      CylindricaSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      EvilFlowerSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      BulbPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      PrickleGrassSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      WineCupsSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      ToePlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      },
      LeafyPlantSeed: {
        mass: 1.0,
        primaryElement: "Creature"
      }
    }
  },
  Plant: {
    Crop: {
      BasicFabricPlant: {
        mass: 1.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 2.0
      },
      BasicSingleHarvestPlant: {
        mass: 1.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 3.0
      },
      BeanPlant: {
        mass: 2.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 21.0
      },
      ColdWheat: {
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 12200.0,
        age: 18.0
      },
      CritterTrapPlant: {
        mass: 4.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0,
        age: 30.0
      },
      ForestTreeBranch: {
        mass: 8.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 4.5
      },
      ForestTree: {
        mass: 2.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 4.5
      },
      GasGrass: {
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 12200.0,
        age: 4.0,
        minLight: 10000.0
      },
      SaltPlant: {
        mass: 2.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 7400.0,
        age: 6.0
      },
      PrickleFlower: {
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 6.0,
        minLight: 200.0
      },
      SeaLettuce: {
        mass: 1.0,
        decor: 10.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        maxRadiation: 7400.0,
        age: 12.0
      },
      SpiceVine: {
        mass: 2.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 8.0
      },
      SuperWormPlant: {
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 8.0
      },
      SwampHarvestPlant: {
        mass: 1.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 6.6
      },
      SwampLily: {
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 12.0
      },
      WormPlant: {
        mass: 1.0,
        decor: -5.0,
        decorRadius: 1.0,
        primaryElement: "Creature",
        maxRadiation: 9800.0,
        age: 4.0
      },
      MushroomPlant: {
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 4600.0,
        age: 7.5
      }
    },
    Forage: {
      BasicForagePlantPlanted: {
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      ForestForagePlantPlanted: {
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      SwampForagePlantPlanted: {
        mass: 100.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      }
    },
    Decor: {
      CactusPlant: {
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      ColdBreather: {
        mass: 400.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature"
      },
      Cylindrica: {
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      EvilFlower: {
        mass: 1.0,
        decor: 80.0,
        decorRadius: 7.0,
        primaryElement: "Creature",
        maxRadiation: 12200.0
      },
      BulbPlant: {
        mass: 1.0,
        decor: 15.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      PrickleGrass: {
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 900.0
      },
      Oxyfern: {
        mass: 1.0,
        decor: -10.0,
        decorRadius: 2.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      WineCups: {
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 900.0
      },
      ToePlant: {
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      },
      LeafyPlant: {
        mass: 1.0,
        decor: 25.0,
        decorRadius: 4.0,
        primaryElement: "Creature",
        maxRadiation: 2200.0
      }
    }
  },
  Geyser: {
    Geyser: {
      GeyserGeneric_steam: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_steam: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_water: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_slush_water: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_filthy_water: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_slush_salt_water: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_salt_water: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_small_volcano: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_big_volcano: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_liquid_co2: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_co2: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_hydrogen: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_hot_po2: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_slimy_po2: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_chlorine_gas: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_methane: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_copper: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_iron: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_gold: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_aluminum: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_tungsten: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_niobium: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_molten_cobalt: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_oil_drip: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      GeyserGeneric_liquid_sulfur: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "Katairite"
      },
      OilWell: {
        mass: 2000.0,
        decor: 10.0,
        decorRadius: 2.0,
        primaryElement: "SedimentaryRock"
      }
    }
  },
  Equipment: {
    Suit: {
      Atmo_Suit: {
        mass: 200.0,
        primaryElement: "Dirt"
      },
      Jet_Suit: {
        mass: 200.0,
        primaryElement: "Steel"
      },
      Lead_Suit: {
        mass: 200.0,
        primaryElement: "Dirt"
      },
      Oxygen_Mask: {
        mass: 15.0,
        primaryElement: "Dirt"
      }
    },
    Worn: {
      Worn_Atmo_Suit: {
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Jet_Suit: {
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Lead_Suit: {
        mass: 200.0,
        primaryElement: "Creature"
      },
      Worn_Oxygen_Mask: {
        mass: 15.0,
        primaryElement: "Creature"
      }
    },
    Clothes: {
      Cool_Vest: {
        mass: 4.0,
        primaryElement: "Carbon"
      },
      CustomClothing: {
        mass: 7.0,
        primaryElement: "Carbon"
      },
      EquippableBalloon: {
        mass: 1.0,
        primaryElement: "Carbon"
      },
      Funky_Vest: {
        mass: 4.0,
        primaryElement: "Carbon"
      },
      SleepClinicPajamas: {
        mass: 4.0,
        primaryElement: "Carbon"
      },
      Warm_Vest: {
        mass: 4.0,
        primaryElement: "Carbon"
      }
    }
  }
}