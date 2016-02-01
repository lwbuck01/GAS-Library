function doGet(e) {
  var template = HtmlService.createTemplateFromFile('Index');
  return template.evaluate()
      .setTitle('Google Site Page With Bootstrap')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
