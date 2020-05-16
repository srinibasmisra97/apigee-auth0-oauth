authorizeEndpoint = "https://dev-srini.auth0.com/authorize";
client_id = context.getVariable("private.auth0_credentials.client_id");
client_secret = context.getVariable("private.auth0_credentials.client_secret");
state = context.getVariable("request.queryparam.state");
scope = "openid%20profile%20email"
response_type = "code"

hostname = context.getVariable("request.header.host");
basePath = context.getVariable("proxy.basepath");
sessionID = context.getVariable("messageid");
redirect_uri = "https://" + hostname + basePath + "/redirect?sessionid=" + sessionID;

url = authorizeEndpoint + "?client_id=" + client_id + "&response_type=" + response_type + "&state=" + state + "&scope=" + scope + "&redirect_uri=" + redirect_uri;

context.setVariable("login.url", url);