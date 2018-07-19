function activate_modal()
{
  var modal = document.getElementsByName("modal")[0];

}

window.onload = function()
{
  VC.CreateVidyoConnector
  ({
    viewId: "video",
    viewStyle: "VIDYO_CONNECTORVIEWSTYLE_Default",
    remoteParticipants: 2,
    logFileFilter: "warning info@VidyoClient info@VidyoConnector",
    logFileName: "",
    userData: ""
  });
}
