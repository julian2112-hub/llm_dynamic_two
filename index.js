const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 3000

process.env.PIPENV_IGNORE_VIRTUALENVS = '1';  // Ignoriert vorhandene virtuelle Umgebungen
process.env.PIPENV_VERBOSITY = '-1';  // Unterdrückt Warnungen


app.get('/:sentence', (req, res) => {
  const encodedSentence = encodeURI(req.params.sentence);
  // const pythonCommand = `python query.py "${encodedSentence}"`;
  //const pythonCommand = `source /venv/Scripts/activate && query.py "${encodedSentence}"`;
  //const pythonCommand = `pipenv run python query.py "${encodedSentence}"`;

  exec(pythonCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Fehler beim Ausführen des Python-Skripts: ${error.message}`);
      return res.status(500).send('Interner Serverfehler');
    }
    if (stderr) {
      console.error(`Fehlerausgabe des Python-Skripts: ${stderr}`);
      return res.status(500).send('Interner Serverfehler');
    }

    try {
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (e) {
      console.error(`Fehler beim Parsen des JSON-Objekts: ${e}`);
      return res.status(500).send('Interner Serverfehler');
    }
  });
});