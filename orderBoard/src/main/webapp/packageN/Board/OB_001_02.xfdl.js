(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_02");
            this.set_titletext("주문수정팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_updOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01_00_00","24","28","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주문상태");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStatNm","176","31","170","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","24","67","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주문상품");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","176","71","170","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_itemCombo");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgOrd","45","130","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주문수정");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","197","130","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_02.xfdl", function() {
        this.OB_001_02_onload = function(obj,e)
        {
        	this.fn_setOrdStatCbo();

        	this.fn_setItemCbo();

        	alert(this.getOwnerFrame().ordNo);
        };

        this.btn_chgOrd_onclick = function(obj,e)
        {
        	this.ds_updOrd.clearData();
        	this.ds_updOrd.addRow();
        	this.ds_updOrd.setColumn(0, "ORD_STAT_CD", this.cbo_ordStatNm.value);
        	this.ds_updOrd.setColumn(0, "ITEM_CD", this.cbo_itemNm.value);
        	this.ds_updOrd.setColumn(0, "ORD_NO", this.getOwnerFrame().ordNo);

        	trace(this.ds_updOrd.getColumn(0, "ORD_STAT_CD"));
        	trace(this.ds_updOrd.getColumn(0, "ITEM_CD"));
        	trace(this.ds_updOrd.getColumn(0, "ORD_NO"));

        	var strSvcId = "updateOrdList";
        	var strSvcUrl = "updateOrdList.do";
        	var inData = "ds_updOrd=ds_updOrd";
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

        this.fn_setOrdStatCbo = function(obj,e)
        {
        	this.ds_searchCombo.clearData();
        	this.ds_searchCombo.addRow();
        	this.ds_searchCombo.setColumn(0, "CD_VAL", "001");

        	var strSvcId = "selectCommonCode";
        	var strSvcUrl = "selectCommonCode.do";
        	var inData = "ds_search=ds_searchCombo";
        	var outData = "ds_ordStatCombo=ds_commonCode";

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
        	if(errorCode < 0){
        		alert("작업 실패 에러 코드 : " + errorCode);
        		return 0;
        	}
        	switch(svcID)
        	{
        		case "selectCommonCode" :
        			trace("주문상태 콤보박스 세팅 완료");
        			break;
        		case "selectItemList" :
        			trace("주문상품 콤보박스 세팅 완료");
        			break;
        		case "updateOrdList" :
        			alert("주문 수정 완료");
        			this.close();
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_02_onload,this);
            this.btn_chgOrd.addEventHandler("onclick",this.btn_chgOrd_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
        };
        this.loadIncludeScript("OB_001_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
