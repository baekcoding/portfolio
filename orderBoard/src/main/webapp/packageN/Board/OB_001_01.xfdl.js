(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCustGb", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGbCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_regOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_BIZ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","32","36","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","175","34","200","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","32","80","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("휴대폰번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","175","78","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","10","120","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("생년월일/사업자번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_birBizNo","175","118","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01_00","32","159","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","175","158","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","24","196","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("고객구분");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGbNm","176","199","170","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_custGbCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","24","235","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주문상품");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","176","239","170","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","45","298","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주문등록");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","197","298","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	this.fn_setCustGbCbo();

        	this.fn_setItemCbo();
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	//alert("주문등록 버튼 클릭");
        	this.ds_regOrd.clearData();
        	this.ds_regOrd.addRow();
        	this.ds_regOrd.setColumn(0, "CUST_NM", this.edt_custNm.value);
        	this.ds_regOrd.setColumn(0, "PHONE", this.edt_phone.value);
        	this.ds_regOrd.setColumn(0, "BIR_BIZ_NO", this.edt_birBizNo.value);
        	this.ds_regOrd.setColumn(0, "ADDR", this.edt_addr.value);
        	this.ds_regOrd.setColumn(0, "CUST_GBCD", this.cbo_custGbNm.value);
        	this.ds_regOrd.setColumn(0, "ITEM_CD", this.cbo_itemNm.value);

        	trace(this.ds_regOrd.getColumn(0, "CUST_NM"));
        	trace(this.ds_regOrd.getColumn(0, "PHONE"));
        	trace(this.ds_regOrd.getColumn(0, "BIR_BIZ_NO"));
        	trace(this.ds_regOrd.getColumn(0, "ADDR"));
        	trace(this.ds_regOrd.getColumn(0, "CUST_GBCD"));
        	trace(this.ds_regOrd.getColumn(0, "ITEM_CD"));

        	var strSvcId = "insertOrdList";
        	var strSvcUrl = "insertOrdList.do";
        	var inData = "ds_regOrd=ds_regOrd";
        	var outData = "";

        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);

        };

        this.btn_exit_onclick = function(obj,e)
        {
        	//alert("닫기 버튼 클릭");
        	this.close();
        };

        this.fn_setCustGbCbo = function(obj,e)
        {
        	// alert("onload 함수 실행");
        	this.ds_searchCustGb.clearData();
        	this.ds_searchCustGb.addRow();
        	this.ds_searchCustGb.setColumn(0, "CD_VAL", "002");

        	var strSvcId = "selectCommonCode";
        	var strSvcUrl = "selectCommonCode.do";
        	var inData = "ds_search=ds_searchCustGb";
        	var outData = "ds_custGbCombo=ds_commonCode";

        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        this.fn_setItemCbo = function(obj,e)
        {
        	var strSvcId = "selectItemList";
        	var strSvcUrl = "selectItemList.do";
        	var inData = "";
        	var outData = "ds_itemCombo=ds_itemCombo";

        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID)
        	{
        	case "selectCommonCode" :
        		trace("고객구분 콤보박스 세팅 완료");
        		break;
        	case "selectItemList" :
        		trace("주문상품 콤보박스 세팅 완료");
        		break;
        	}
        };

        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0){
        		alert("작업 실패 에러 코드 : " + errorCode);
        		return 0;
        	}
        	switch(svcID)
        	{
        		case "selectCommonCode" :
        			trace("고객구분 콤보박스 세팅 완료");
        			break;
        		case "selectItemList" :
        			trace("주문상품 콤보박스 세팅 완료");
        			break;
        		case "insertOrdList" :
        			alert("주문 등록 완료");
        			this.close();
        			break;
        	}
        };

        this.edt_custNm_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.edt_custNm.addEventHandler("onchanged",this.edt_custNm_onchanged,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
