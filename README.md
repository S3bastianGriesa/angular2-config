# Integration von GitBook und GitHub

Folgendes GithubRepository wurde als Beispiel mit GitBook synchronisiert: https://github.com/S3bastianGriesa/angular2-config.
Das dazugehörige Gitbook ist hier zu finden: https://s3bastiangriesa.gitbooks.io/angular2-config/content/v/develop/

- Der GitBook Editor erlaubt das direkte Editieren der jeweiligen Markdowndateien in einem WYSIWYG-Editor. Der Editor arbeitet mit Shortcuts und erlaubt das schnelle editieren der Dokumente. Es ist auch möglich direkt Markdown in einer Splitview mit Markdown/Ergebnis-Ansicht zu editieren. Leider werden die Changes vom Benutzer jedes mal als fester Commit mit der Benennung `Updates README.md` auf den Branch gepusht. Diese Commitmessage scheint sich auch nicht ändern zu lassen.

- Das GitBook ist frei durchsuchbar und verfügt über ein Inhaltsverzeichnis, dass sich über alle Markdowndateien aufspannt. Sehr praktisch für große `Knowledge`-Repositories.

- Es ist möglich Dokumente zeilenweise inline zu kommentieren und dort auch Diskussion ähnlich wie in Pullrequests zu starten. Das ermöglicht uns im Gegensatz zu Github auch das Diskutieren an bereits bestehendem Text.

- Mittels `ChangeRequests` lassen sich in Gitbook neue Branches mit gewünschten Änderungen anlegen.
Die Branches sind leider nach dem Muster `CHANGES/1`, `CHANGES/2`, `CHANGES/3`... benannt und diese Benennung scheint sich erstmal nicht ändern zu lassen (zumindest habe ich hier noch keine Möglichkeit gefunden). Das sehe ich als großes Manko, weil wir so keine vernünftig benannten Branches über GitBook erstellen können. Als Alternative könnte man die Branches jedoch über GitHub bzw Git mit Git-Flow anlegen und dann in GitBook weiter bearbeiten.

In der kurzen Zeit in der ich mir GitBook angeguckt habe sind mir leider zwei Minuspunkte aufgefallen - zum einen die automatische Benennung der Branches nach dem Format `CHANGES/1`, `CHANGES/2` usw.. und die festen Commits nach dem Muster `Updates README.md`. Diese beiden Punkte schränken uns leider etwas in einer sauberen Versionierung, wie wir sie von unserem Git-Arbeitsprozess gewöhnt sein, ein. Hier sollte auf jeden Fall nochmal evaluiert werden, ob diese Benennung wirklich fix ist oder ob es nicht doch die Möglichkeit gibt hier auch eigene Benennung vorzunehmen.

Abgesehen von den genannten Problemen bietet uns GitBook eine GitHub Integration und vorallem eine übersichtliche, durchsuchbare und sehr gut wartbare Schnittstelle zu unserer Dokumentation, ohne dass wir auf GitHub als Dokumentationsmedium verzichten müssen.
