import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material";

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

export interface Aeropuerto {
  num: number;
  pais: string;
  ciudad: string;
  aeropuerto: string;
  viajeros: number;
}

const AEROPUERTOS: Aeropuerto[] = [
  {
    num: 1,
    pais: " United Kingdom",
    ciudad: "London",
    aeropuerto: "Heathrow Airport",
    viajeros: NaN
  },
  {
    num: 2,
    pais: " France",
    ciudad: "Paris",
    aeropuerto: "Charles de Gaulle Airport",
    viajeros: NaN
  },
  {
    num: 3,
    pais: " Netherlands",
    ciudad: "Amsterdam",
    aeropuerto: "Amsterdam Airport Schiphol",
    viajeros: NaN
  },
  {
    num: 4,
    pais: " Germany",
    ciudad: "Frankfurt",
    aeropuerto: "Frankfurt am Main Airport",
    viajeros: NaN
  },
  {
    num: 5,
    pais: " Spain",
    ciudad: "Madrid",
    aeropuerto: "Adolfo Suárez Madrid–Barajas Airport",
    viajeros: NaN
  },
  {
    num: 6,
    pais: " Spain",
    ciudad: "Barcelona",
    aeropuerto: "Barcelona–El Prat Josep Tarradellas Airport",
    viajeros: NaN
  },
  {
    num: 7,
    pais: " Turkey",
    ciudad: "Istanbul",
    aeropuerto: "Istanbul Airport",
    viajeros: NaN
  },
  {
    num: 8,
    pais: " Russia",
    ciudad: "Moscow",
    aeropuerto: "Sheremetyevo International Airport",
    viajeros: NaN
  },
  {
    num: 9,
    pais: " Germany",
    ciudad: "Munich",
    aeropuerto: "Munich Airport",
    viajeros: NaN
  },
  {
    num: 10,
    pais: " United Kingdom",
    ciudad: "London",
    aeropuerto: "Gatwick Airport",
    viajeros: NaN
  },
  {
    num: 11,
    pais: " Italy",
    ciudad: "Rome",
    aeropuerto: "Leonardo da Vinci–Fiumicino Airport",
    viajeros: NaN
  },
  {
    num: 12,
    pais: " Ireland",
    ciudad: "Dublin",
    aeropuerto: "Dublin Airport",
    viajeros: NaN
  },
  {
    num: 13,
    pais: " France",
    ciudad: "Paris",
    aeropuerto: "Orly Airport",
    viajeros: NaN
  },
  {
    num: 14,
    pais: " Austria",
    ciudad: "Vienna",
    aeropuerto: "Vienna International Airport",
    viajeros: NaN
  },
  {
    num: 15,
    pais: "  Switzerland",
    ciudad: "Zürich",
    aeropuerto: "Zurich Airport",
    viajeros: NaN
  },
  {
    num: 16,
    pais: " Portugal",
    ciudad: "Lisbon",
    aeropuerto: "Lisbon Airport",
    viajeros: NaN
  },
  {
    num: 17,
    pais: " Denmark",
    ciudad: "Copenhagen",
    aeropuerto: "Copenhagen Airport",
    viajeros: NaN
  },
  {
    num: 18,
    pais: " Spain",
    ciudad: "Palma de Mallorca",
    aeropuerto: "Palma de Mallorca Airport",
    viajeros: NaN
  },
  {
    num: 19,
    pais: " United Kingdom",
    ciudad: "Manchester",
    aeropuerto: "Manchester Airport",
    viajeros: NaN
  },
  {
    num: 20,
    pais: " Italy",
    ciudad: "Milan",
    aeropuerto: "Malpensa Airport",
    viajeros: NaN
  },
  {
    num: 21,
    pais: " Norway",
    ciudad: "Oslo",
    aeropuerto: "Oslo Airport, Gardermoen",
    viajeros: NaN
  },
  {
    num: 22,
    pais: " Russia",
    ciudad: "Moscow",
    aeropuerto: "Domodedovo International Airport",
    viajeros: NaN
  },
  {
    num: 23,
    pais: " United Kingdom",
    ciudad: "London",
    aeropuerto: "London Stansted Airport",
    viajeros: NaN
  },
  {
    num: 24,
    pais: " Belgium",
    ciudad: "Brussels",
    aeropuerto: "Brussels Airport",
    viajeros: NaN
  },
  {
    num: 25,
    pais: " Sweden",
    ciudad: "Stockholm",
    aeropuerto: "Stockholm Arlanda Airport",
    viajeros: NaN
  },
  {
    num: 26,
    pais: " Greece",
    ciudad: "Athens",
    aeropuerto: "Athens International Airport",
    viajeros: NaN
  },
  {
    num: 27,
    pais: " Germany",
    ciudad: "Düsseldorf",
    aeropuerto: "Düsseldorf Airport",
    viajeros: NaN
  },
  {
    num: 28,
    pais: " Germany",
    ciudad: "Berlin",
    aeropuerto: "Berlin Tegel Airport",
    viajeros: NaN
  },
  {
    num: 29,
    pais: " Russia",
    ciudad: "Moscow",
    aeropuerto: "Vnukovo International Airport",
    viajeros: NaN
  },
  {
    num: 30,
    pais: " Finland",
    ciudad: "Helsinki",
    aeropuerto: "Helsinki Airport",
    viajeros: NaN
  },
  {
    num: 31,
    pais: " Spain",
    ciudad: "Málaga",
    aeropuerto: "Málaga Airport",
    viajeros: NaN
  },
  {
    num: 32,
    pais: " Russia",
    ciudad: "Saint Petersburg",
    aeropuerto: "Pulkovo Airport",
    viajeros: NaN
  },
  {
    num: 33,
    pais: " Poland",
    ciudad: "Warsaw",
    aeropuerto: "Warsaw Chopin Airport",
    viajeros: NaN
  },
  {
    num: 34,
    pais: " United Kingdom",
    ciudad: "London",
    aeropuerto: "Luton Airport",
    viajeros: NaN
  },
  {
    num: 35,
    pais: "  Switzerland",
    ciudad: "Geneva",
    aeropuerto: "Geneva Airport",
    viajeros: NaN
  },
  {
    num: 36,
    pais: " Czech Republic",
    ciudad: "Prague",
    aeropuerto: "Václav Havel Airport Prague",
    viajeros: NaN
  },
  {
    num: 37,
    pais: " Germany",
    ciudad: "Hamburg",
    aeropuerto: "Hamburg Airport",
    viajeros: NaN
  },
  {
    num: 38,
    pais: " Hungary",
    ciudad: "Budapest",
    aeropuerto: "Budapest Ferenc Liszt International Airport",
    viajeros: NaN
  },
  {
    num: 39,
    pais: " Turkey",
    ciudad: "Istanbul",
    aeropuerto: "Istanbul Atatürk Airport (closed on 6 April 2019)",
    viajeros: NaN
  },
  {
    num: 40,
    pais: " Ukraine",
    ciudad: "Kiev",
    aeropuerto: "Boryspil International Airport",
    viajeros: NaN
  },
  {
    num: 41,
    pais: " Spain",
    ciudad: "Alicante",
    aeropuerto: "Alicante Airport",
    viajeros: NaN
  },
  {
    num: 42,
    pais: " United Kingdom",
    ciudad: "Edinburgh",
    aeropuerto: "Edinburgh Airport",
    viajeros: NaN
  },
  {
    num: 43,
    pais: " Romania",
    ciudad: "Bucharest",
    aeropuerto: "Henri Coandă International Airport",
    viajeros: NaN
  },
  {
    num: 44,
    pais: " France",
    ciudad: "Nice",
    aeropuerto: "Nice Côte d'Azur Airport",
    viajeros: NaN
  },
  {
    num: 45,
    pais: " Italy",
    ciudad: "Milan/Bergamo",
    aeropuerto: "Orio al Serio International Airport",
    viajeros: NaN
  },
  {
    num: 46,
    pais: " Portugal",
    ciudad: "Porto",
    aeropuerto: "Porto Airport",
    viajeros: NaN
  },
  {
    num: 47,
    pais: " Germany",
    ciudad: "Stuttgart",
    aeropuerto: "Stuttgart Airport",
    viajeros: NaN
  },
  {
    num: 48,
    pais: " United Kingdom",
    ciudad: "Birmingham",
    aeropuerto: "Birmingham Airport",
    viajeros: NaN
  },
  {
    num: 49,
    pais: " Germany",
    ciudad: "Cologne/Bonn",
    aeropuerto: "Cologne Bonn Airport",
    viajeros: NaN
  },
  {
    num: 50,
    pais: " France",
    ciudad: "Lyon",
    aeropuerto: "Lyon–Saint-Exupéry Airport",
    viajeros: NaN
  },
  {
    num: 51,
    pais: " Italy",
    ciudad: "Venice",
    aeropuerto: "Venice Marco Polo Airport",
    viajeros: NaN
  },
  {
    num: 52,
    pais: " Germany",
    ciudad: "Berlin",
    aeropuerto: "Berlin Schönefeld Airport",
    viajeros: NaN
  },
  {
    num: 53,
    pais: " Italy",
    ciudad: "Naples",
    aeropuerto: "Naples Airport",
    viajeros: NaN
  },
  {
    num: 54,
    pais: " Italy",
    ciudad: "Catania",
    aeropuerto: "Catania-Fontanarossa Airport",
    viajeros: NaN
  },
  {
    num: 55,
    pais: " France",
    ciudad: "Marseille",
    aeropuerto: "Marseille Provence Airport",
    viajeros: NaN
  },
  {
    num: 56,
    pais: " France",
    ciudad: "Toulouse",
    aeropuerto: "Toulouse–Blagnac Airport",
    viajeros: NaN
  },
  {
    num: 57,
    pais: " Italy",
    ciudad: "Bologna",
    aeropuerto: "Bologna Guglielmo Marconi Airport",
    viajeros: NaN
  },
  {
    num: 58,
    pais: " France  Switzerland",
    ciudad: "Basel/Mulhouse/Freiburg im Breisgau",
    aeropuerto: "EuroAirport Basel Mulhouse Freiburg",
    viajeros: NaN
  },
  {
    num: 59,
    pais: " Portugal",
    ciudad: "Faro",
    aeropuerto: "Faro Airport",
    viajeros: NaN
  },
  {
    num: 60,
    pais: " United Kingdom",
    ciudad: "Bristol",
    aeropuerto: "Bristol Airport",
    viajeros: NaN
  },
  {
    num: 61,
    pais: " United Kingdom",
    ciudad: "Glasgow",
    aeropuerto: "Glasgow Airport",
    viajeros: NaN
  },
  {
    num: 62,
    pais: " Spain",
    ciudad: "Valencia",
    aeropuerto: "Valencia Airport",
    viajeros: NaN
  },
  {
    num: 63,
    pais: " Poland",
    ciudad: "Kraków",
    aeropuerto: "Kraków John Paul II International Airport",
    viajeros: NaN
  },
  {
    num: 64,
    pais: " Belgium",
    ciudad: "Charleroi",
    aeropuerto: "Brussels South Charleroi Airport",
    viajeros: NaN
  },
  {
    num: 65,
    pais: " Spain",
    ciudad: "Ibiza",
    aeropuerto: "Ibiza Airport",
    viajeros: NaN
  },
  {
    num: 66,
    pais: " Greece",
    ciudad: "Heraklion",
    aeropuerto: "Heraklion International Airport",
    viajeros: NaN
  },
  {
    num: 67,
    pais: " Latvia",
    ciudad: "Riga",
    aeropuerto: "Riga International Airport",
    viajeros: NaN
  },
  {
    num: 68,
    pais: " France",
    ciudad: "Bordeaux",
    aeropuerto: "Bordeaux–Mérignac Airport",
    viajeros: NaN
  },
  {
    num: 69,
    pais: " Spain",
    ciudad: "Seville",
    aeropuerto: "Seville Airport",
    viajeros: NaN
  },
  {
    num: 70,
    pais: " Malta",
    ciudad: "Malta",
    aeropuerto: "Malta International Airport",
    viajeros: NaN
  },
  {
    num: 71,
    pais: " Iceland",
    ciudad: "Reykjavík",
    aeropuerto: "Keflavík International Airport",
    viajeros: NaN
  },
  {
    num: 72,
    pais: " France",
    ciudad: "Nantes",
    aeropuerto: "Nantes Atlantique Airport",
    viajeros: NaN
  },
  {
    num: 73,
    pais: " Bulgaria",
    ciudad: "Sofia",
    aeropuerto: "Sofia Airport",
    viajeros: NaN
  },
  {
    num: 74,
    pais: " Italy",
    ciudad: "Palermo",
    aeropuerto: "Falcone–Borsellino Airport",
    viajeros: NaN
  },
  {
    num: 75,
    pais: " Greece",
    ciudad: "Thessaloniki",
    aeropuerto: 'Thessaloniki Airport "Macedonia"',
    viajeros: NaN
  },
  {
    num: 76,
    pais: " Netherlands",
    ciudad: "Eindhoven",
    aeropuerto: "Eindhoven Airport",
    viajeros: NaN
  },
  {
    num: 77,
    pais: " Sweden",
    ciudad: "Gothenburg",
    aeropuerto: "Göteborg Landvetter Airport",
    viajeros: NaN
  },
  {
    num: 78,
    pais: " Italy",
    ciudad: "Milan",
    aeropuerto: "Linate Airport",
    viajeros: NaN
  },
  {
    num: 79,
    pais: " Norway",
    ciudad: "Bergen",
    aeropuerto: "Bergen Airport, Flesland",
    viajeros: NaN
  },
  {
    num: 80,
    pais: " Germany",
    ciudad: "Hanover",
    aeropuerto: "Langenhagen Airport",
    viajeros: NaN
  },
  {
    num: 81,
    pais: " United Kingdom",
    ciudad: "Belfast",
    aeropuerto: "Belfast International Airport",
    viajeros: NaN
  },
  {
    num: 82,
    pais: " Serbia",
    ciudad: "Belgrade",
    aeropuerto: "Belgrade Nikola Tesla Airport",
    viajeros: NaN
  },
  {
    num: 83,
    pais: " Spain",
    ciudad: "Bilbao",
    aeropuerto: "Bilbao Airport",
    viajeros: NaN
  },
  {
    num: 84,
    pais: " Italy",
    ciudad: "Rome",
    aeropuerto: "Ciampino Airport",
    viajeros: NaN
  },
  {
    num: 85,
    pais: " Italy",
    ciudad: "Bari",
    aeropuerto: "Bari Airport",
    viajeros: NaN
  },
  {
    num: 86,
    pais: " Greece",
    ciudad: "Rhodes",
    aeropuerto: "Rhodes International Airport",
    viajeros: NaN
  },
  {
    num: 87,
    pais: " Italy",
    ciudad: "Pisa",
    aeropuerto: "Galileo Galilei Airport",
    viajeros: NaN
  },
  {
    num: 88,
    pais: " Poland",
    ciudad: "Gdańsk",
    aeropuerto: "Gdańsk Lech Wałęsa Airport",
    viajeros: NaN
  },
  {
    num: 89,
    pais: " United Kingdom",
    ciudad: "Newcastle upon Tyne",
    aeropuerto: "Newcastle Airport",
    viajeros: NaN
  },
  {
    num: 90,
    pais: " Russia Ukraine[Note 1]",
    ciudad: "Simferopol",
    aeropuerto: "Simferopol International Airport",
    viajeros: NaN
  },
  {
    num: 91,
    pais: " United Kingdom",
    ciudad: "London",
    aeropuerto: "London City Airport",
    viajeros: NaN
  },
  {
    num: 92,
    pais: " Belarus",
    ciudad: "Minsk",
    aeropuerto: "Minsk National Airport",
    viajeros: NaN
  },
  {
    num: 93,
    pais: " Lithuania",
    ciudad: "Vilnius",
    aeropuerto: "Vilnius Airport",
    viajeros: NaN
  },
  {
    num: 94,
    pais: " United Kingdom",
    ciudad: "Liverpool",
    aeropuerto: "Liverpool John Lennon Airport",
    viajeros: NaN
  },
  {
    num: 95,
    pais: " Poland",
    ciudad: "Katowice",
    aeropuerto: "Katowice Airport",
    viajeros: NaN
  },
  {
    num: 96,
    pais: " Italy",
    ciudad: "Cagliari",
    aeropuerto: "Cagliari Elmas Airport",
    viajeros: NaN
  },
  {
    num: 97,
    pais: " United Kingdom",
    ciudad: "Derby/Leicester/Nottingham",
    aeropuerto: "East Midlands Airport",
    viajeros: NaN
  },
  {
    num: 98,
    pais: " Russia",
    ciudad: "Krasnodar",
    aeropuerto: "Krasnodar International Airport[Note 2]",
    viajeros: NaN
  },
  {
    num: 99,
    pais: " Luxembourg",
    ciudad: "Luxembourg City",
    aeropuerto: "Luxembourg Airport",
    viajeros: NaN
  },
  {
    num: 100,
    pais: " Norway",
    ciudad: "Trondheim",
    aeropuerto: "Trondheim Airport Værnes",
    viajeros: NaN
  }
];

const COUNTRIES: Country[] = [
  {
    name: "Russia",
    flag: "f/f3/Flag_of_Russia.svg",
    area: 17075200,
    population: 146989754
  },
  {
    name: "Canada",
    flag: "c/cf/Flag_of_Canada.svg",
    area: 9976140,
    population: 36624199
  },
  {
    name: "United States",
    flag: "a/a4/Flag_of_the_United_States.svg",
    area: 9629091,
    population: 324459463
  },
  {
    name: "China",
    flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: "app-basic-table",
  templateUrl: "./basic-table.component.html",
  styleUrls: ["./basic-table.component.css"]
})
export class BasicTableComponent implements AfterViewInit {
  displayedColumns: string[] = ["name", "flag", "area", "population"];
  aeroDisplayedCols: string[] = [
    "num",
    "pais",
    "ciudad",
    "aeropuerto",
    "viajeros"
  ];

  dataSource = COUNTRIES;
  //dataAeropuertos: MatTableDataSource<AEROPUERTOS>;
  dataAeropuertos = new MatTableDataSource(AEROPUERTOS);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngAfterViewInit(): void {
    // actualizo el paginador despues de cargar la tabla
    this.dataAeropuertos.paginator = this.paginator;
  }

  // ngOnInit(): void {}
}
