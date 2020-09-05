OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Bereinigt",
    "Infected" : "Infiziert",
    "Unchecked" : "Ungeprüft",
    "Scanner exit status" : "Scanner-Abschluss-Status",
    "Scanner output" : "Scanner-Ergebnis",
    "Saving…" : "Speichere…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Die Datei {file} ist mit {virus} infiziert",
    "The file has been removed" : "Die Datei wurde entfernt",
    "File containing {virus} detected" : "Datei mit {virus} gefunden",
    "Antivirus detected a virus" : "Antivirus hat einen Virus gefunden",
    "Virus %s is detected in the file. Upload cannot be completed." : "Der Virus %s wurde in der Datei gefunden. Das Hochladen kann nicht abgeschlossen werden. ",
    "Saved" : "Gespeichert",
    "Antivirus for files" : "Antivirus für Dateien",
    "An antivirus app for Nextcloud based on ClamAV" : "Eine Antivirus-App für Nextcloud basierend auf ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus für Dateien ist eine Antiviren-App für Nextcloud die auf ClamAV basiert.\n\n* 🕵️‍♂️ Lädt ein Nutzer eine Datei hoch, wird diese geprüft\n* ☢️ Hochgeladene infizierte Dateien werden gelöscht und eine Benachrichtigung wird angezeigt / per E-Mail versandt\n* 🔎 Hintergrundjob scannt alle Dateien\n\nDiese App überprüft Dateien, die in Nextcloud hochgeladen werden, auf Viren, bevor sie in den Nextcloud-Speicher geschrieben werden. Wenn eine Datei als Virus identifiziert wird, wird sie entweder protokolliert oder nicht auf den Server hochgeladen. Die Anwendung basiert auf der zugrunde liegenden ClamAV-Viren-Such-Engine, die der Administrator bei der Konfiguration auswählen muss\nVirendefinitionen sollten aktuell gehalten werden. Die Aktivierung dieser App kann die Systemperformance verlangsamen, da zusätzliche Tasks für jedes Hochladen ausgeführt werden müssen.  Weitere Infos in der Antivirus-Dokumentation.",
    "Greetings {user}," : "Willkommen, {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Entschuldigung, aber in einer hochzuladenden Datei wurde Malware gefunden und diese daher gelöscht.",
    "This email is a notification from {host}. Please, do not reply." : "Diese E-Mail ist eine Benachrichtigung von {host}. Bitte antworten Sie nicht darauf.",
    "File uploaded: {file}" : "Datei hochgeladen: {file}",
    "Antivirus for Files" : "Antivirus für Dateien",
    "Mode" : "Modus",
    "ClamAV Executable" : "Ausführbare ClamAV-Datei",
    "ClamAV Daemon" : "ClamAV-Daemon",
    "ClamAV Daemon (Socket)" : "ClamAV-Daemon (Socket)",
    "Kaspersky Daemon" : "Kaspersky-Daemon",
    "Socket" : "Socket",
    "Not required in Executable Mode." : "Nicht notwendig im Anwendungsmodus.",
    "Host" : "Host",
    "Address of Antivirus Host." : "Adresse des Antivirus-Hosts",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Port-Nummer des Antivirus-Hosts.",
    "Stream Length" : "Länge des Datenstroms",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength-Wert in Bytes.",
    "bytes" : "Byte",
    "Path to clamscan" : "Pfad zu ClamScan",
    "Path to clamscan executable." : "Pfad zur ClamScan-Anwendung.",
    "Not required in Daemon Mode." : "Nicht notwendig im Daemon-Modus.",
    "Extra command line options (comma-separated)" : "Zusätzliche Kommandozeilen-Optionen (mit Komma getrennt)",
    "File size limit, -1 means no limit" : "Dateigrößenbeschränkung, -1 bedeutet kein Limit",
    "Background scan file size limit in bytes, -1 means no limit" : "Dateigrößenbeschränkung für Hintergrund-Scans, -1 bedeutet kein Limit",
    "When infected files are found during a background scan" : "Wenn infizierte Dateien während eines Hintergrund-Scans gefunden werden",
    "Only log" : "Nur loggen",
    "Delete file" : "Datei löschen",
    "Save" : "Speichern",
    "Advanced" : "Erweitert",
    "Rules" : "Regeln",
    "Clear All" : "Alles löschen",
    "Reset to defaults" : "Auf Standard zurücksetzen",
    "Match by" : "Übereinstimmung anhand",
    "Scanner exit status or signature to search" : "Scanner-Abschluss-Status oder Signatur, nach der gesucht werden soll",
    "Description" : "Beschreibung",
    "Mark as" : "Markieren als",
    "Add a rule" : "Eine Regel hinzufügen",
    "Executable" : "Anwendung",
    "Daemon" : "Daemon",
    "Daemon (Socket)" : "Daemon (Socket)",
    "Clamav Socket." : "ClamAV-Socket"
},
"nplurals=2; plural=(n != 1);");
