//toto je konfigurační soubor test runneru
//musí se ukládaat do rootu projektu, test runner si ho pak sám najde
import { cpus } from "os";
import { devices } from "@playwright/test";

//testrunner se jmenuje "playwright/test" a je nativní
//object obsahuje objekt, jehož properties slouží ke konfiguraci test runneru
const config = {
    //global configuration for all tests
    use: {
        headless: false, 
        //velikost okna browseru:
        viewport: {width: 1920, height: 1080},
        //ignorování případných chyb protokolu https:
        ignoreHTTPSErrors: true,
        //record video, screenshots and trace of tests
        video:"on",
        screenshot:"on",
        trace:"on",
    },
    //KONFIGURACE SAMOTNÉHO TEST RUNNERU:
    //kde má hledat testy, které má spustit:
    testDir: "/tests/loginTests",
    //workers určují maximální počet paralelně exekuovaných souborů s testy
    workers: cpus().length / 2, //pokud 1, pak testy poběží sekvenčně
    
    //KONFIGURACE TESTŮ = každý test poběží dle vlastní konfigurace na jednom ze zařízení níže:
    projects: [
        {
            name: "Chromium Desktop",
            use: {
                browserName: "chromium",
                headless: false,
            },
        },
        {
            name: "Webkit Desktop",
            use: {
                browserName: "webkit"
            },
        },
        {
            name: "Firefox Desktop 800x600",
            use: {
                browserName: "firefox",
                viewport: {width: 800, height: 600},
            },
        },
        {
            name: "Webkit iPhone 12",
            use: {
                browserName: "webkit",
                ...devices["iPhone 12"] //objekt devices se naimportoval ... 3 tečky = destructuring = vložíme všechny properties do objektu, před který jsme napsali 3 tečky
            }
        }
    ],
};

//musíme ho exportovat, aby ho test runner mohl při každém spuštění importovat
export default config;