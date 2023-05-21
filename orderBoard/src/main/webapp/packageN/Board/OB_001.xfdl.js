(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001");
            this.set_titletext("주문게시판");
            this.set_background("");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","100","-1","1140","100",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","-1","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 조건");
            obj.set_font("bold 16px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_background("ivory");
            obj.set_border("1px solid black");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","20","111","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주문등록");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ordNo","220","4","200","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","109","6","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주문 번호");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_cmpYn","557","3","81","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","439","6","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인고객여부");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStat","556","52","144","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","430","53","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주문 상태");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_custGb","820","6","174","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_custGb_innerdataset = new nexacro.NormalDataset("rdo_custGb_innerdataset", obj);
            rdo_custGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">법인</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">임직원</Col></Row></Rows>");
            obj.set_innerdataset(rdo_custGb_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","710","8","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("고객 구분");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ordList","4","150","866","449",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"150\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"고객구분\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"주문일시\"/></Band><Band id=\"body\"><Cell text=\"bind:ORD_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ORD_STAT_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CUST_NO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CUST_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CUST_GBCD_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PHONE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ADDR\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:ITEM_NM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:REG_DT\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","110","53","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("고객명");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","220","53","200","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updOrd","109","111","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문수정");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delOrd","200","111","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주문삭제");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectOrd","1135","6","98","86",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_background("#05599d");
            obj.set_color("white");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001.xfdl", function() {

        this.OB_001_onload = function(obj,e)
        {
        	// alert("onload 함수 실행");
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

        this.btn_selectOrd_onclick = function(obj,e)
        {
        	/*alert("주문리스트 조회");*/
        	this.ds_searchList.clearData();
        	this.ds_searchList.addRow();
        	this.ds_searchList.setColumn(0, "ORD_NO", this.edt_ordNo.value);
        	this.ds_searchList.setColumn(0, "CUST_NM", this.edt_custNm.value);
        	this.ds_searchList.setColumn(0, "COMP_YN", this.chk_cmpYn.value);
        	this.ds_searchList.setColumn(0, "ORD_STAT_CD", this.cbo_ordStat.value);
        	this.ds_searchList.setColumn(0, "CUST_GBCD", this.rdo_custGb.value);

        	trace("로그 남기기(크롬의 console.log기능과 같음)");
        	trace("ORD_NO      : " + this.ds_searchList.getColumn(0, "ORD_NO"));
        	trace("CUST_NM     : " + this.ds_searchList.getColumn(0, "CUST_NM"));
        	trace("COMP_YN     : " + this.ds_searchList.getColumn(0, "COMP_YN"));
        	trace("ORD_STAT_CD : " + this.ds_searchList.getColumn(0, "ORD_STAT_CD"));
        	trace("CUST_GBCD   : " + this.ds_searchList.getColumn(0, "CUST_GBCD"));

        	var strSvcId = "selectOrdList";
        	var strSvcUrl = "selectOrdList.do";
        	var inData = "ds_searchList=ds_searchList";
        	var outData = "ds_list=ds_list";

        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	//alert("주문등록 팝업 오픈");
        	var oArg = {};
        	var oOption = {};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popup", "Board::OB_001_01.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btn_updOrd_onclick = function(obj,e)
        {
        	var ordNo = this.ds_list.getColumn(this.ds_list.rowposition, "ORD_NO");

        	var oArg = {ordNo:ordNo};
        	var oOption = {};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popup", "Board::OB_001_02.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btn_delOrd_onclick = function(obj,e)
        {
        	//alert("주문삭제 진행");
        	var ordNo = this.ds_list.getColumn(this.ds_list.rowposition, "ORD_NO");

        	this.ds_delList.clearData();
        	this.ds_delList.addRow();
        	this.ds_delList.setColumn(0, "ORD_NO", ordNo);

        	var strSvcId = "deleteOrdList";
        	var strSvcUrl = "deleteOrdList.do";
        	var inData = "ds_delList=ds_delList";
        	var outData = "";

        	var strArg = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        this.grd_ordList_oncelldblclick = function(obj,e)
        {
        	// 그리드 더블클릭 시 진행할 스크립트 작성
        };

        this.chk_cmpYn_onchanged = function(obj,e)
        {
        	alert("onchanged 함수 실행 완료");
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
        		this.ds_ordStatCombo.insertRow(0);
        		this.ds_ordStatCombo.setColumn(0, "CD_VAL1", "");
        		this.ds_ordStatCombo.setColumn(0, "CD_NM1", "전체");
        		break;
        	case "deleteOrdList" :
        		alert("삭제 완료");
        		break;
        	}
        };

        this.cbo_ordStat_onitemchanged = function(obj,e)
        {

        };

        this.edt_custNm_onchanged = function(obj,e)
        {

        };

        this.edt_ordNo_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_onload,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.edt_ordNo.addEventHandler("onchanged",this.edt_ordNo_onchanged,this);
            this.chk_cmpYn.addEventHandler("onchanged",this.chk_cmpYn_onchanged,this);
            this.cbo_ordStat.addEventHandler("onitemchanged",this.cbo_ordStat_onitemchanged,this);
            this.grd_ordList.addEventHandler("oncelldblclick",this.grd_ordList_oncelldblclick,this);
            this.edt_custNm.addEventHandler("onchanged",this.edt_custNm_onchanged,this);
            this.btn_updOrd.addEventHandler("onclick",this.btn_updOrd_onclick,this);
            this.btn_delOrd.addEventHandler("onclick",this.btn_delOrd_onclick,this);
            this.btn_selectOrd.addEventHandler("onclick",this.btn_selectOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
