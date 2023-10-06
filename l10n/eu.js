OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Garbitu",
    "Infected" : "Infektatua",
    "Unchecked" : "Egiaztatu gabea",
    "Scanner exit status" : "Eskanerraren irteera egoera",
    "Scanner output" : "Eskanerraren irteera",
    "Saving…" : "Gordetzen…",
    "Antivirus" : "Antibirusa",
    "File {file} is infected with {virus}" : "{file} fitxategia {virus} birusarekin infektatuta dago",
    "The file has been removed" : "Fitxategia kendu da",
    "File containing {virus} detected" : "{virus} daukan fitxategia detektatu da",
    "Antivirus detected a virus" : "Antibirusak birus bat detektatu du",
    "Virus %s is detected in the file. Upload cannot be completed." : "%s birusa detektatu da fitxategian. Igoera ezin da osatu.",
    "Saved" : "Gordeta",
    "Antivirus for files" : "Fitxategientzako antibirusa",
    "An antivirus app for Nextcloud" : "Nextclouderako birusen aurkako aplikazioa",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source), Kaspersky Scan Engine or an ICAP compatible scanner\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Fitxategientzako antibirusa Nextcloud-erako birusen aurkako aplikazioa da.\n\n* 🕵️‍♂️ Erabiltzaileak fitxategi bat igotzen duenean, egiaztatu egiten da\n* ☢️ Igotako eta kutsatutako fitxategiak ezabatu egingo dira eta jakinarazpen bat erakutsiko da eta/edo posta elektroniko bidez bidaliko da\n* 🔎 Atzeko planoko lana fitxategi guztiak eskaneatzeko\n* ❓ Erabili ClamAV (kode irekia), Kaspersky Scan Engine edo ICAP eskaner bateragarria\n\nAplikazio honek Nextcloud-era igotzen diren fitxategiak  birusen bila ikuskatzen ditu, Nextcloud biltegian idatzi aurretik. Fitxategi bat birus gisa identifikatzen bada, edo erregistratzen da edo ez da zerbitzarira igotzen. Aplikazioa oinarritzen da azpian dagoen ClamAV birusen eskaneatzeko motorrean, zeina administratzaileak Nextcloud-i seinalatzen baitio aplikazioa konfiguratzerakoan. Bestela, Kaspersky Scan Engine bat konfigura daiteke, zerbitzari bereizi batean exekutatu behar duena.\nAplikazio hau eraginkorra izan dadin, ClamAV birusaren definizioak eguneratuta egon behar dira. Kontuan izan, gainera, aplikazio hau gaitzeak sistemaren errendimenduan eragina izango duela, igoera bakoitzean prozesamendu gehigarria behar baita. Informazio gehiago birusen aurkako dokumentazioan eskuragarri dago.",
    "Greetings {user}," : "Kaixo {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Igo nahi zenuen fitxategian malware bat detektatu da eta ezabatu egin behar izan da.",
    "This email is a notification from {host}. Please, do not reply." : "E-posta jakinarazpen hau {host}-(e)k bidalia da. Ez erantzun mezu honi.",
    "File uploaded: {file}" : "Fitxategia igota: {file}",
    "Antivirus for Files" : "Fitxategientzako antibirusa",
    "Mode" : "Modua",
    "ClamAV Executable" : "ClamAV exekutagarria",
    "ClamAV Daemon" : "ClamAV Daemon-a",
    "ClamAV Daemon (Socket)" : "ClamAV Daemon-a (Socket)",
    "Kaspersky Daemon" : "Kaspersky Daemon-a",
    "ICAP server" : "ICAP zerbitzaria",
    "Socket" : "Socket",
    "ClamAV Socket." : "ClamAV Socket-a.",
    "Not required in Executable Mode." : "Ez da beharrezkoa Exekutagarri moduan.",
    "Host" : "Ostalaria",
    "Address of Antivirus Host." : "Antibirus ostalariaren helbidea.",
    "Port" : "Ataka",
    "Port number of Antivirus Host." : "Antibirus ostalariaren ataka zenbakia.",
    "ICAP preset" : "Aurrez ezarritako ICAP ",
    "Select" : "Hautatu",
    "ICAP mode" : "ICAP modua",
    "ICAP service" : "ICAP zerbitzua",
    "ICAP virus response header" : "ICAP birusen erantzunaren goiburua",
    "Stream Length" : "Korrontearen luzera",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength balioa bytetan.",
    "bytes" : "byte",
    "Path to clamscan" : "Clamscan-era bidea",
    "Path to clamscan executable." : "Clamscan exekutagarrira bidea.",
    "Not required in Daemon Mode." : "Ez da beharrezkoa Daemon moduan.",
    "Extra command line options (comma-separated)" : "Komando-lerro gehigarrien aukerak (komaz bereizita)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Aldizkako atzeko planoko miaketetarako fitxategi tamainaren muga eta zatikatutako igoeretan, -1-k esan nahi du ez duela mugarik",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Atzeko planoko miaketa eta zatikatutako igoeretan fitxategi tamainaren muga bytetan, -1-k esan nahi du ez duela mugarik",
    "Check only first bytes of the file, -1 means no limit" : "Egiaztatu fitxategiaren lehen byteak bakarrik, -1ek mugarik ez duela esan nahi du",
    "When infected files are found during a background scan" : "Infektatuz gero, atzeko planoko eskaneatzean aurkitzen dira fitxategiak",
    "Only log" : "Log fitxategia soilik",
    "Delete file" : "Ezabatu fitxategia",
    "Save" : "Gorde",
    "Advanced" : "Aurreratua",
    "Rules" : "Arauak",
    "Clear All" : "Garbitu dena",
    "Reset to defaults" : "Berrezarri lehenetsitakoak",
    "Match by" : "Bat dator",
    "Scanner exit status or signature to search" : "Eskanerraren irteera egoera edo bilatzeko sinadura",
    "Description" : "Deskripzioa",
    "Mark as" : "Markatu honela",
    "Add a rule" : "Gehitu arau bat"
},
"nplurals=2; plural=(n != 1);");
