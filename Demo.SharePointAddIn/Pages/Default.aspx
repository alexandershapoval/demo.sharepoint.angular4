<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <!-- SharePoint default scripts -->
    <script src="~/_layouts/15/MicrosoftAjax.js" type="text/javascript"></script>
    <script src="~/_layouts/15/SP.runtime.js" type="text/javascript"></script>
    <script src="~/_layouts/15/SP.Core.js" type="text/javascript"></script>
	<script src="~/_layouts/15/sp.js" type="text/javascript"></script>
    

    <!-- Add your CSS styles to the following file -->
    <link href="../Scripts/vendor.css" rel="Stylesheet" type="text/css" />

    <!-- Add your JavaScript to the following file -->
    <script src="../Scripts/polyfills.js" type="text/javascript"></script>
    <script src="../Scripts/vendor.js" type="text/javascript"></script>
    <script src="../Scripts/app.js" type="text/javascript"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    DEMO: SharePoint AddIn
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <demo-app></demo-app>

</asp:Content>
