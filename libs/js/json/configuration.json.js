Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Fluxo-Jornada-Lisa","publishDate":"30/03/2023 14:51:00","pages":[{"id":"deb3f4b3-9b80-4df7-a026-359158a5c241","name":"Jornada Lisa_v2","version":"1.0","author":"carolina.moreira","image":"files\\diagrams\\Jornada Lisa_v2.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"c6d04abd-ec62-4d7d-81ec-c40e32438cfc","name":"PROCESSO DE DELIVERY JORNADA LISA","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":262.0}],"radius":0.0,"height":1184.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"b4fbcac9-acf9-4a0b-a060-d12abbfd44ca","name":"Todas as quintas-feiras do mês","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\TimerStart.png","imageBounds":{"points":[{"x":127.0,"y":349.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerStart","elementSubType":"StartEvent","properties":[{"id":"TimerEventDefinitionType","name":"Data do timer","value":"2023-03-27T00:00:00","type":"text"}]},{"id":"cda9048f-1698-424c-9787-45d3ffdab854","name":"Solicitar informações complementares da síntese","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":611.0,"y":817.0}],"radius":0.0,"height":69.0,"width":119.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Solicitar informações complementares da síntese - Subprocesso: Solicitar informações complementares da síntese","type":"url","pageRef":"073dd325-3813-4502-abe7-bf8c7018cf6d","processPageRef":"31659f5f-224a-484d-8f43-6804616a91a6"}]},{"id":"678b77c4-4fc6-4d7b-98ae-e10cfd770917","name":"Realizar reunião de diagnóstico da demanda e oportunidade","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":795.0,"y":597.0}],"radius":0.0,"height":61.0,"width":124.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Realizar reunião de diagnóstico da demanda e oportunidade - Subprocesso:\nRealizar reunião de diagnóstico da demanda e oportunidade","type":"url","pageRef":"048c46e6-5910-483d-9438-8c6c785b16ba","processPageRef":"35ab8dc4-b37a-4da4-b04f-7d6b24eed592"}]},{"id":"98e48dc6-0dc4-43db-b247-55e1f525973d","name":"Criar uma iniciativa","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2663.01318,"y":695.0099}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[{"id":"494351eb-9026-415d-a5b5-af85cd2efe5c","name":"Arquivo anexo","value":"files\\attachments\\js logo.png","type":"url","urlText":"js logo.png"}]},{"id":"8008c460-1e1a-414a-bc1d-7127f8c62307","name":"Formulário Síntese","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":530.0,"y":339.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","elementSubType":"DataObject","properties":[],"presentationAction":{"value":"https://docs.google.com/forms/d/e/1FAIpQLScYra0HJDSeokKVaFBNV8m-_0GdMZ4P5Fjx-xCOaPVseAvHfg/viewform","type":"url"}},{"id":"f913da45-2a9e-46d0-95b2-4c9e4fb38cc3","name":"Planilha JL Priorização | Work in Progress","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":530.0,"y":695.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","elementSubType":"DataObject","properties":[],"presentationAction":{"value":"https://docs.google.com/spreadsheets/d/1iAS_xchRpTekhs2AqNtsC4vMUP05utTiEvgaqio7Clg/edit?usp=drive-slack&ts=6422140e","type":"url"}},{"id":"c1acbb92-00cc-4540-9e6a-f1a0a0e6967e","name":"Imagem","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\c1acbb92-00cc-4540-9e6a-f1a0a0e6967e.png","imageBounds":{"points":[{"x":2721.01318,"y":663.0099}],"radius":0.0,"height":32.0,"width":32.0,"shape":"rect"},"elementType":"ImageArtifact","elementSubType":"ImageArtifact","presentationAction":{"value":"https://jira-olist.atlassian.net/jira/software/c/projects/PODP/boards/1288","type":"url"}}]}],"subPages":[{"id":"073dd325-3813-4502-abe7-bf8c7018cf6d","name":"Solicitar informações complementares da síntese - Subprocesso: Solicitar informações complementares da síntese","image":"files\\diagrams\\Solicitar informacoes complementares da sintese.svg","isSubprocessPage":true,"isCallActivityPage":true,"elements":[{"id":"b4fbcac9-acf9-4a0b-a060-d12abbfd44ca","name":"Todas as quintas-feiras do mês","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\TimerStart.png","imageBounds":{"points":[{"x":127.0,"y":349.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerStart","elementSubType":"StartEvent","properties":[{"id":"TimerEventDefinitionType","name":"Data do timer","value":"2023-03-27T00:00:00","type":"text"}]},{"id":"cda9048f-1698-424c-9787-45d3ffdab854","name":"Solicitar informações complementares da síntese","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":611.0,"y":817.0}],"radius":0.0,"height":69.0,"width":119.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Solicitar informações complementares da síntese - Subprocesso: Solicitar informações complementares da síntese","type":"url","pageRef":"073dd325-3813-4502-abe7-bf8c7018cf6d","processPageRef":"31659f5f-224a-484d-8f43-6804616a91a6"}]},{"id":"678b77c4-4fc6-4d7b-98ae-e10cfd770917","name":"Realizar reunião de diagnóstico da demanda e oportunidade","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":795.0,"y":597.0}],"radius":0.0,"height":61.0,"width":124.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Realizar reunião de diagnóstico da demanda e oportunidade - Subprocesso:\nRealizar reunião de diagnóstico da demanda e oportunidade","type":"url","pageRef":"048c46e6-5910-483d-9438-8c6c785b16ba","processPageRef":"35ab8dc4-b37a-4da4-b04f-7d6b24eed592"}]},{"id":"98e48dc6-0dc4-43db-b247-55e1f525973d","name":"Criar uma iniciativa","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2663.01318,"y":695.0099}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[{"id":"494351eb-9026-415d-a5b5-af85cd2efe5c","name":"Arquivo anexo","value":"files\\attachments\\js logo.png","type":"url","urlText":"js logo.png"}]},{"id":"8008c460-1e1a-414a-bc1d-7127f8c62307","name":"Formulário Síntese","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":530.0,"y":339.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","elementSubType":"DataObject","properties":[],"presentationAction":{"value":"https://docs.google.com/forms/d/e/1FAIpQLScYra0HJDSeokKVaFBNV8m-_0GdMZ4P5Fjx-xCOaPVseAvHfg/viewform","type":"url"}},{"id":"f913da45-2a9e-46d0-95b2-4c9e4fb38cc3","name":"Planilha JL Priorização | Work in Progress","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":530.0,"y":695.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","elementSubType":"DataObject","properties":[],"presentationAction":{"value":"https://docs.google.com/spreadsheets/d/1iAS_xchRpTekhs2AqNtsC4vMUP05utTiEvgaqio7Clg/edit?usp=drive-slack&ts=6422140e","type":"url"}},{"id":"c1acbb92-00cc-4540-9e6a-f1a0a0e6967e","name":"Imagem","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\c1acbb92-00cc-4540-9e6a-f1a0a0e6967e.png","imageBounds":{"points":[{"x":2721.01318,"y":663.0099}],"radius":0.0,"height":32.0,"width":32.0,"shape":"rect"},"elementType":"ImageArtifact","elementSubType":"ImageArtifact","presentationAction":{"value":"https://jira-olist.atlassian.net/jira/software/c/projects/PODP/boards/1288","type":"url"}}],"parentRef":"deb3f4b3-9b80-4df7-a026-359158a5c241"},{"id":"048c46e6-5910-483d-9438-8c6c785b16ba","name":"Realizar reunião de diagnóstico da demanda e oportunidade - Subprocesso:\nRealizar reunião de diagnóstico da demanda e oportunidade","image":"files\\diagrams\\Realizar reuniao de diagnostico da demanda e oportunidade.svg","isSubprocessPage":true,"isCallActivityPage":true,"elements":[{"id":"b4fbcac9-acf9-4a0b-a060-d12abbfd44ca","name":"Todas as quintas-feiras do mês","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\TimerStart.png","imageBounds":{"points":[{"x":127.0,"y":349.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerStart","elementSubType":"StartEvent","properties":[{"id":"TimerEventDefinitionType","name":"Data do timer","value":"2023-03-27T00:00:00","type":"text"}]},{"id":"cda9048f-1698-424c-9787-45d3ffdab854","name":"Solicitar informações complementares da síntese","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":611.0,"y":817.0}],"radius":0.0,"height":69.0,"width":119.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Solicitar informações complementares da síntese - Subprocesso: Solicitar informações complementares da síntese","type":"url","pageRef":"073dd325-3813-4502-abe7-bf8c7018cf6d","processPageRef":"31659f5f-224a-484d-8f43-6804616a91a6"}]},{"id":"678b77c4-4fc6-4d7b-98ae-e10cfd770917","name":"Realizar reunião de diagnóstico da demanda e oportunidade","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":795.0,"y":597.0}],"radius":0.0,"height":61.0,"width":124.0,"shape":"rect"},"elementType":"CallActivity","elementSubType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Realizar reunião de diagnóstico da demanda e oportunidade - Subprocesso:\nRealizar reunião de diagnóstico da demanda e oportunidade","type":"url","pageRef":"048c46e6-5910-483d-9438-8c6c785b16ba","processPageRef":"35ab8dc4-b37a-4da4-b04f-7d6b24eed592"}]},{"id":"98e48dc6-0dc4-43db-b247-55e1f525973d","name":"Criar uma iniciativa","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2663.01318,"y":695.0099}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[{"id":"494351eb-9026-415d-a5b5-af85cd2efe5c","name":"Arquivo anexo","value":"files\\attachments\\js logo.png","type":"url","urlText":"js logo.png"}]},{"id":"8008c460-1e1a-414a-bc1d-7127f8c62307","name":"Formulário Síntese","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":530.0,"y":339.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","elementSubType":"DataObject","properties":[],"presentationAction":{"value":"https://docs.google.com/forms/d/e/1FAIpQLScYra0HJDSeokKVaFBNV8m-_0GdMZ4P5Fjx-xCOaPVseAvHfg/viewform","type":"url"}},{"id":"f913da45-2a9e-46d0-95b2-4c9e4fb38cc3","name":"Planilha JL Priorização | Work in Progress","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":530.0,"y":695.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","elementSubType":"DataObject","properties":[],"presentationAction":{"value":"https://docs.google.com/spreadsheets/d/1iAS_xchRpTekhs2AqNtsC4vMUP05utTiEvgaqio7Clg/edit?usp=drive-slack&ts=6422140e","type":"url"}},{"id":"c1acbb92-00cc-4540-9e6a-f1a0a0e6967e","name":"Imagem","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\c1acbb92-00cc-4540-9e6a-f1a0a0e6967e.png","imageBounds":{"points":[{"x":2721.01318,"y":663.0099}],"radius":0.0,"height":32.0,"width":32.0,"shape":"rect"},"elementType":"ImageArtifact","elementSubType":"ImageArtifact","presentationAction":{"value":"https://jira-olist.atlassian.net/jira/software/c/projects/PODP/boards/1288","type":"url"}}],"parentRef":"deb3f4b3-9b80-4df7-a026-359158a5c241"}]},{"id":"048c46e6-5910-483d-9438-8c6c785b16ba","name":"Realizar reunião de diagnóstico da demanda e oportunidade","version":"1.0","author":"carolina.moreira","image":"files\\diagrams\\Realizar reuniao de diagnostico da demanda e oportunidade.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"35ab8dc4-b37a-4da4-b04f-7d6b24eed592","name":"Subprocesso:\u000bRealizar reunião de diagnóstico da demanda e oportunidade","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"4d70f055-03e2-452b-bc40-be115b881aca","name":"Seguir o processo para > 2 sprints","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":972.0,"y":224.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}]}],"subPages":[]},{"id":"073dd325-3813-4502-abe7-bf8c7018cf6d","name":"Solicitar informações complementares da síntese","version":"1.0","author":"carolina.moreira","image":"files\\diagrams\\Solicitar informacoes complementares da sintese.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"048c46e6-5910-483d-9438-8c6c785b16ba","containerName":"Realizar reunião de diagnóstico da demanda e oportunidade","isSubprocess":false,"elements":[{"id":"35ab8dc4-b37a-4da4-b04f-7d6b24eed592","value":"Subprocesso:\nRealizar reunião de diagnóstico da demanda e oportunidade"},{"id":"2b72f7d1-695a-49a6-96ca-b87c8a4d6bb3","value":"Repassar junto com o relator as informações preenchidas"},{"id":"6c67e67d-0a08-4842-985e-c9fe1dbb1d55","value":"Possui iniciativa JL?"},{"id":"9d2faaa5-ecdf-4fa7-aa46-6b216ad51d67","value":""},{"id":"156ccb47-1d57-4e1c-a9c5-da69b1a7f06f","value":""},{"id":"e1ed20fb-8cb0-445c-abf9-d9589140b9d1","value":"Entender o andamento"},{"id":"f9a6f394-94de-43b4-be17-a0d79f907b66","value":"Preencher os campos das colunas \"Product Development\""},{"id":"7a0b92df-f65c-4116-ae8b-dc172b12c3fa","value":"Verificar o painel de TOP Priorities"},{"id":"45e55a39-475a-4ff3-a9d6-04d932d1a35a","value":"Verificar se a proposta já possui iniciativa em JL"},{"id":"9b80ea23-2d21-463d-956f-324e6c216141","value":"Fazer proposições para as evidências relatadas"},{"id":"32479560-282e-4cc1-8aa8-4329728bfb66","value":"É uma TOP Priority?"},{"id":"7bc6d567-742d-4738-9823-9a5be3594b8b","value":""},{"id":"1300e3a3-0138-432b-958e-a04a300bb448","value":"Entender com o relator e o TC da frente a solução proposta"},{"id":"4d70f055-03e2-452b-bc40-be115b881aca","value":"Seguir o processo para > 2 sprints"},{"id":"4e454a1b-8f4e-45a8-8e5c-bdc13ed0bb21","value":"Analisar o macro esforço da demanda proposta de solução"},{"id":"7abe8b9e-f240-41ff-93f2-28e4b038f252","value":"duração < ou = 2 sprints"},{"id":"ae96dd06-3a0c-4cf0-8376-0c2091f3b0d3","value":""},{"id":"ec386207-ef07-4301-a865-bdfc24f9141e"},{"id":"f23040c2-c988-4e32-bf70-292f3e7ab1d4"},{"id":"61ed2dc6-5c4c-4272-a27e-f539e783c760"},{"id":"85074ba2-2770-40cb-9fc4-bebb851752a3"},{"id":"88ca1ab7-a46d-4820-9210-8e28e9845fcd"},{"id":"9029721c-22da-4eef-9e59-2dda62d044a2"},{"id":"66716216-f57f-4489-bd79-b37a7a27e103"},{"id":"61224446-47bc-4bfd-809d-70bc5f60d03d"}]},{"containerId":"073dd325-3813-4502-abe7-bf8c7018cf6d","containerName":"Solicitar informações complementares da síntese","isSubprocess":false,"elements":[{"id":"31659f5f-224a-484d-8f43-6804616a91a6","value":"Subprocesso: Solicitar informações complementares da síntese"},{"id":"6dc06bd9-d996-47b1-9519-56694eeb5231","value":""},{"id":"034c8df0-7a0f-4a67-8d00-4c82ba2658fc","value":"Solicitar o complemento das informações preenchidas na síntese"},{"id":"2417fc23-e5e4-4772-8754-ac5885463717","value":"Criar uma reunião de trabalho com o relator"},{"id":"b2491134-2d05-4407-9b64-0c233e41ae86","value":"Atualizar as informações no arquivo de trabalho"},{"id":"78879144-472c-4eae-b665-08c79054efde","value":"Informações\ncompletas?"},{"id":"be0dc733-e016-4572-b028-401cc4c3b0b5","value":""},{"id":"e22b4292-3e79-4688-90e6-4df0652f47a5","value":"Revisar com o relator a informação que falta clareza"},{"id":"40c340d7-4a42-4202-81c4-49a1eca165b1"},{"id":"83d00c22-a2a8-4e7d-8add-3c01709394e1"},{"id":"d5f778e2-bf33-4f61-a0c4-0a056e6718ef"},{"id":"b2c7b933-91e2-4b3a-a275-58bbf3719234"},{"id":"068afaf2-c63e-4a6e-80d9-814028cee4a5"},{"id":"2fbc6152-98e1-4248-9d35-71d23e2b6836"}]},{"containerId":"deb3f4b3-9b80-4df7-a026-359158a5c241","containerName":"Jornada Lisa_v2","isSubprocess":false,"elements":[{"id":"c6d04abd-ec62-4d7d-81ec-c40e32438cfc","value":"PROCESSO DE DELIVERY JORNADA LISA"},{"id":"a9702876-a98c-46de-b7d5-7b9c997ca5d5","value":"RELATOR"},{"id":"85c7d789-ba83-4f6a-9ef8-19b0723f2f3c","value":"TEAM JL"},{"id":"e8e9d204-9471-4668-8fad-3f26c6b42a85","value":"COMITÊ JL"},{"id":"ec1f1391-4d2e-48c6-931f-94550940623c","value":"TEGNOLOGIA"},{"id":"8008c460-1e1a-414a-bc1d-7127f8c62307","value":"Formulário Síntese"},{"id":"f913da45-2a9e-46d0-95b2-4c9e4fb38cc3","value":"Planilha JL Priorização | Work in Progress"},{"id":"b4fbcac9-acf9-4a0b-a060-d12abbfd44ca","value":"Todas as quintas-feiras do mês"},{"id":"0b7d1a94-c4fc-4df7-bdcd-258a3fc8fc66","value":"Refinar o backlog"},{"id":"c5c6b1e4-e029-4a54-9659-61c8598129da","value":"Analisar a capacity dos times"},{"id":"c9828408-6cb3-4ece-a44e-d46180bd8bf6","value":"Planejar sprint"},{"id":"97e32e85-ed99-49ff-a05c-eb307ba0ae11","value":"Deploy em produção"},{"id":"62f8c796-ad8f-4d3c-935d-05b62bb37bb7","value":"Analisar os inputs para registrar uma melhoria no processo operacional"},{"id":"628e6caf-164b-4628-99f7-0746eb038c89","value":"Criar épico no Jira"},{"id":"1827a984-ac04-4790-9003-3fa009e5c12e","value":"Realizar a review"},{"id":"061a7c81-68b3-4aa4-a176-581952e4631c","value":""},{"id":"a95efa05-dba6-4b52-b510-3172af81b038","value":"Comunicar a entrega da iniciativa ao olist"},{"id":"c9f7cd6e-3f9f-4a43-8e64-b928940239ac","value":"Iniciar a sprint"},{"id":"2a787ef1-71a8-4eb7-9f69-f9024e8b4564","value":"Acompanhar a execução"},{"id":"af4a9415-4558-4dcb-a612-5ef6218d8f49","value":"Realizar discovery"},{"id":"589f0db6-e38e-4944-8959-1a4fdf6e24d1","value":""},{"id":"cc739cf1-190b-4361-bf73-15afaff4e017","value":""},{"id":"10509164-ed6d-4fce-abc7-c8641f2585c7","value":"Realizar a avaliação inicial das informações"},{"id":"18d6e7fb-0f5c-4a45-a630-c32db4bfd013","value":"Registrar uma demanda no formulário contendo as informações para melhoria"},{"id":"391e41d5-1d77-419f-868c-999a56082ae1","value":"As informações estão completas?"},{"id":"e4b3c9c4-2e9d-4b65-9679-37701d0e5429","value":"Elaborar proposta de oportunidade"},{"id":"117845ce-9f5d-4cce-9e02-d6d0cc6aebe9","value":"Apresentar proposta ao comitê"},{"id":"678b77c4-4fc6-4d7b-98ae-e10cfd770917","value":"Realizar reunião de diagnóstico da demanda e oportunidade"},{"id":"e35c50f7-1a92-4606-ae3f-b2fb95c4c643","value":"Apresentar o funil de inputs"},{"id":"7b6fa996-d5f4-4e55-9201-b1a08b6d5dd4","value":"Todas as segundas-feiras do mês"},{"id":"cda9048f-1698-424c-9787-45d3ffdab854","value":"Solicitar informações complementares da síntese"},{"id":"0edaccee-db08-43c0-8393-31705ce20336","value":"Apresentar a proposta de oportunidade"},{"id":"98e48dc6-0dc4-43db-b247-55e1f525973d","value":"Criar uma iniciativa"},{"id":"a6414fc0-803d-4272-bd8b-9979ec10beee","value":"Criar cerimônia de alinhamento"},{"id":"a2a70390-88eb-46cf-a50f-c6b08db71c8c","value":"Qual a\navaliação?"},{"id":"513937e8-067f-4e2b-aeda-b8da4ee0f6a5","value":"Informar aos envolvidos que a proposta não foi aprovada"},{"id":"c8280db8-e927-4bec-9334-2d882f64ff3d","value":"Informar aos envolvidos os ajustes necessários"},{"id":"da2a561d-8a39-4bd1-8742-e29ca5d6283a","value":"Informar aos envolvidos que a proposta foi aprovada"},{"id":"f7b2f254-59a7-473f-81de-5dd782cf7daf","value":""},{"id":"00ed387a-5eb2-4cff-91cf-78db1b0f1a03","value":"Realizar a avalização"},{"id":"d73b5c2b-dc1e-4cee-a29f-56f17d80120a"},{"id":"d733e112-0836-4850-bf94-08be44f08803"},{"id":"2b91d80a-9cd5-4282-b8f5-ce64cee2019b"},{"id":"c63c23c4-b945-4556-bc61-60503498b9c1"},{"id":"345c6fff-1799-4f23-bffd-3bb7f511122a"},{"id":"b3a4fd9b-11d3-4409-b25e-55ac3ccd48c2"},{"id":"478778c1-b419-42d1-b7f6-f249afa5387b"},{"id":"161a4c36-8d4f-42a6-9a8e-c052e0191d2b"},{"id":"453b49d3-4fae-49bc-a27a-cf8774b264a1"},{"id":"e5f14c1c-9af6-4963-96fa-6cb21a614334"},{"id":"c1acbb92-00cc-4540-9e6a-f1a0a0e6967e","value":""},{"id":"94951936-f3f3-47b5-bdbd-6fa84d735800"},{"id":"86d5f52c-ba07-4c24-91fd-7f66fde376a2"},{"id":"27fd78ee-9fac-40fa-9e44-5b836f2e26ac"},{"id":"288e246a-537b-4069-bea8-278df9df29c3"},{"id":"96daafc7-80a4-4b7d-bd81-ef01955faf7a"},{"id":"dca1e86f-a43b-44dc-b0ce-221f102ef662"},{"id":"e0030908-d870-4386-a586-76951c03e4f3"},{"id":"0ec559ac-fbfc-4114-be11-daefb635e40a"},{"id":"1af2a5c0-99ef-4bfc-800d-472194039492"},{"id":"2afe796c-a62d-440a-b5c2-0a9709a56064"},{"id":"b2f3ea85-ebab-4244-8cc4-2d9189a63a82"},{"id":"31686f31-1ebe-4f43-bff4-29e42d4551d2"},{"id":"2772e099-1eaa-49b2-b8c9-5593bbda4841"},{"id":"7bac521c-7573-4bf0-92bd-1ec3a703890a"},{"id":"5c353f22-95c8-4bad-b426-6f5e6b9fe300"},{"id":"f0d292e0-6e1b-4503-8e06-c759c92904a6"},{"id":"5a76e4c5-2f50-445b-99ac-4f0b947ce481"},{"id":"e1530ae0-0dab-4167-a854-4349f766f584"},{"id":"df51aa09-bb67-4f43-91c9-9668afb125ac"},{"id":"bf5df0f8-6033-43a2-8b72-d5a76044c4f7","value":"OPERAÇÕES"}]}]}