const interfaceData = {
  datafeed: {
    heading: 'PERSONNEL-NUMBER,TITLE,FIRST-NAME,LAST-NAME,KNOWN-AS,BIRTH-DATE,ROLE,POSITION-ENTRY-DATE,BAND,LOCATION,COST-CENTRE,DEPARTMENT,LOCATION,PAYROLL-AREA,PAYROLL-STATUS,START-DATE,LEAVE-DATE,LINE-MANAGER-PERSONNEL-NUMBER,LINE-MANAGER-NAME,EMAIL-ADDRESS,PERMANENT-CONTRACT-INDICATOR,UNIQUE-REGISTRATION-NUMBER,GENDER-KEY,STREET-AND-HOUSE-NUMBER,SECOND-ADDRESS-LINE,CITY,DISTRICT,POST-CODE,PERSONAL-EMAIL-ADDRESS,HOME-PHONE-NUMBER,MOBILE-PHONE-NUMBER,EMERGENCY-CONTACT-NAME,EMERGENCY-CONTACT-RELATIONSHIP,EMERGENCY-CONTACT-PHONE,EMERGENCY-ADDRESS-LINE-1,EMERGENCY-ADDRESS-LINE-2,EMERGENCY-ADDRESS-LINE-3,EMERGENCY-ADDRESS-LINE-4,EMERGENCY-ADDRESS-LINE-5,BANK-SORT-CODE,BANK-ACCOUNT,BSOC-ROLL-NO,NAME-ON-BANK-ACCOUNT,PENSION-GROUP-1,PENSION-GROUP-1-PERC,PENSION-AUTO-ENROLMENT,NOMINEE-TITLE-1,NOMINEE-ADDRESS1-1,NOMINEE-TELEPHONE-1,NOMINEE-DATE-OF-BIRTH-1,NOMINEE-SHARE-1,NOMINEE-TITLE-2,NOMINEE-ADDRESS1-2,NOMINEE-TELEPHONE-2,NOMINEE-DATE-OF-BIRTH-2,NOMINEE-SHARE-2,NOMINEE-TITLE-3,NOMINEE-ADDRESS1-3,NOMINEE-TELEPHONE-3,NOMINEE-DATE-OF-BIRTH-3,NOMINEE-SHARE-3,NOMINEE-TITLE-4,NOMINEE-ADDRESS-4,NOMINEE-TELEPHONE-4,NOMINEE-DATE-OF-BIRTH-4,NOMINEE-SHARE-4,NOMINEE-TITLE-5,NOMINEE-ADDRESS-5,NOMINEE-TELEPHONE-5,NOMINEE-DATE-OF-BIRTH-5,NOMINEE-SHARE-5,HEALTHCARE-1,HEALTHCARE-2,BOOKER-CUSTOMER-NUMBER,HOME-BRANCH',
    regex: /^(.{8})(.{15})(.{40})(.{40})(.{40})(.{10})(.{40})(.{10})(.{2})(.{19})(.{10})(.{15})(.{20})(.{2})(.{40})(.{10})(.{10})(.{12})(.{25})(.{241})(.{12})(.{10})(.{60})(.{60})(.{40})(.{40})(.{40})(.{10})(.{241})(.{14})(.{20})(.{60})(.{20})(.{14})(.{60})(.{60})(.{60})(.{60})(.{60})(.{15})(.{18})(.{16})(.{40})(.{4})(.{4})(.{4})(.{30})(.{60})(.{14})(.{10})(.{3})(.{30})(.{60})(.{14})(.{10})(.{3})(.{30})(.{60})(.{14})(.{10})(.{3})(.{30})(.{60})(.{14})(.{10})(.{3})(.{4})(.{4})(.{20})(.{4})$/d
  },
  stdprice: {
      heading: 'Date,Country Code,Depot Number,Child Article Code,Saleable Unit Code,Weight Type,Number of Items in a Case,Promo Indicator,WSP Collect Price,Local Price Indicator,Standard WSP MIDAS FIELD,Standard WSP Delivered MIDAS FIELD,Start Date,End Date,Delivered Price,Online Exc Price,Click & Collect Price,Spare,Recommended Retail Price,POR,Delivered POR,Online Exclusive POR,Click & Collect POR,Spare POR,MUP WSP Collect Price,MUP Delivered Price,MUP Online Exclusive,MUP Click & Collect,MUP Spare,Promotion No,Prom Collect WSP,Prom Delivered Price,Prom Online Exclusive,Prom Click & Collect,Prom Spare,Pre Promotion Price WSP,Pre Promotion Price Delivered,Pre Promotion Price OE,Pre Promotion Price Click & Collect,Pre Promotion Price Spare,Recommended Retail Price,POR,Delivered POR,Online Exclusive POR,Click & Collect POR,Spare POR,Prom Start Date,Prom End Date',
      regex: /^(\d{8})([A-Z]{2})(\d{3})(\d{6})(\d{6})([A-Z])(\d{5,7}\.\d{2})([A-Z0]|\s)(\d{5,7}\.\d{2})([A-Z]|\s)(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{8})(\d{8})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})([A-Z]\d{4}|\s+)(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{8})(\d{8})$/d,
    },
    fasprice: {
      heading: 'Date,Country Code,Depot Number,Child Article Code,Saleable Unit Code,Weight Type,Number of Items in a Case,Fascia Code,Promotion No,WSP Collect Price,WSP Delivered Price,WSP Online Exclusive,WSP Click & Collect Price,WSP Spare4,Pre Promotion Price WSP,Pre Promotion Price Delivered,Pre Promotion Price OE,Pre Promotion Price Click & Collect,Pre Promotion Price Spare4,Recommended Retail Price,POR,Delivered POR,Online Exclusive POR,Click & Collect POR,Spare POR,Promotion Start,Promotion End',
      regex: /^(\d{8})([A-Z]{2})(\d{3})(\d{6})(\d{6})([A-Z])(\d{5,7}\.\d{2})([A-Z]{2})(\w{5})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{8})(\d{8})$/d
    },
    clbprice: {
      heading: 'Date,Country Code,Depot Number,Child Article Code,Saleable Unit Code,Weight Type,Number of Items in a Case,Club eg H13333,WSP Collect Price,WSP Delivered Price,WSP OE Price,WSP Click & Collect Price,WSP Spare4,Recommended Retail Price,POR,Delivered POR,OE POR,Click & Collect POR,Spare POR,Start Date, End Date',
      regex: /^(\d{8})([A-Z]{2})(\d{3})(\d{6})(\d{6})([A-Z])(\d{5,7}\.\d{2})(\w{6})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{5,7}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{2}\.\d{2})(\d{8})(\d{8})$/d
    }, 
    product: {
      heading: 'PRODTRAN-STORE-ID,PRODTRAN-HUB,PRODTRAN-SUCODE,PRODTRAN-ARTICLE-CODE,PRODTRAN-MIDAS-SPLIT-NUM,PRODTRAN-PRICE,PRODTRAN-ITM-IN-SELL-UNT,PRODTRAN-PROMO,PRODTRAN-UNITID,PRODTRAN-RRP,PRODTRAN-PREV-PRC,PRODTRAN-POR,PRODTRAN-ISNEW,PRODTRAN-ISDEL,PRODTRAN-LEAD-TIME-STATUS,PRODTRAN-PRICE-START,PRODTRAN-PRICE-END,PRODTRAN-STORE-ORDER-GROUP,PRODTRAN-LONDIS-ORDER-GROUP',
      regex: /^(.{3})(.{2})(.{6})(.{6})(.{3})(?<decimal1_2>[^.]{8})(?<decimal2_3>[^.]{6})(.{1})(.{6})(?<decimal3_2>[^.]{8})(?<decimal4_2>[^.]{8})(?<decimal5_2>[^.]{4})(.{1})(.{1})(.{1})(.{8})(.{8})(.{2})(.{1})$/d
    },
    category: {
      heading: 'INTCTGRY-CATEGORYID,INTCTGRY-PARENTID,INTCTGRY-NAME,INTPRODG-ISDEL',
      regex: /^(.{6})(.{6})(.{30})(.{1})$/d
    },
    productgroup: {
      heading: 'INTPRODG-ARTICLE-CODE,INTPRODG-MIDAS-SPLIT-NUM,INTPRODG-NAME,INTPRODG-CATEGORYID,INTPRODG-PACK-SIZE,INTPRODG-ISDEL,INTPRODG-WEB-PARENT-ARTICLE-CODE,INTPRODG-SUCODE,INTPRODG-LONG-NAME,INTPRODG-WEIGHT-TYPE,INTPRODG-VAT-RATE,INTPRODG-SUPPLIER,INTPRODG-PACKDESC,INTPRODG-IMAGEPAID,INTPRODG-OWNBRAND,INTPRODG-STORAGE-TYPE,INTPRODG-ARTICLE-STATUS,INTPRODG-DELIST-REASON,INTPRODG-PARENT-ARTICLE-CODE,INTPRODG-WEB FLAG,INTPRODG-LONDIS-PROD-CD,INTPRODG-BUDGENS-PROD-CD,INTPRODG-PRICE-MARK-FLAG,INTPRODG-ITM-IN-SELL-UNT,INTPRODG-SHELF-LIFE,INTPRODG-MASTER-MIDAS-CODE,INTPRODG-HFSS-HIGH,ITEM-WEIGHT-VOL,ITEM-UNIT',
      regex: /^(.{6})(.{3})(.{30})(.{6})(.{12})(.{1})(.{6})(.{6})(.{60})(.{1})(.{1})(.{7})(.{35})(.{1})(.{1})(.{1})(.{2})(.{1})(.{6})(.{1})(.{8})(.{9})(.{1})(?<decimal1_3>[^.]{8})(.{3})(.{6})(.{1})(?<decimal2_3>[^.]{7})(.{3})$/d
    },
    customer: {
      heading: 'INTCUST-CUSTNO,INTCUST-WEB-BRANCH-ID,INTCUST-HOME-BRANCH,INTCUST-TITLE,INTCUST-SURNAME,INTCUST-FIRSTNAME,INTCUST-TRADING-NAME,INTCUST-STREET2,INTCUST-STREET3,INTCUST-HOUSE-NUMBER,INTCUST-STREET,INTCUST-STREET4,INTCUST-STREET5,INTCUST-CITY,INTCUST-DISTRICT,INTCUST-POSTCODE,INTCUST-TELEPHONE,INTCUST-MOBILE-PHONE,INTCUST-FAX,INTCUST-EMAIL-ADDRESS,INTCUST-CON-PREF-MAIL,INTCUST-CON-PREF-TELEPHONE,INTCUST-CON-PREF-EMAIL,INTCUST-CON-PREF-MOBILE,INTCUST_LICENCED,INTCUST-CAN-SHOP,INTCUST-CAN-DELIVER,INTCUST-FACIA-TYPE,INTCUST-CLASSIFICATION,INTCUST-BUSINESS-TYPE,INTCUST-GROUP-SECTOR,INTCUST-ISDEL,INTCUST-STATUS,INTCUST-ONSTOP-FLAG,INTCUST-SOP-FLAG,INTCUST-NACNO,DS_VDD_FLAG,INTCUST-USE-PROD-CD,INCUST-BRP-CUST-NO,INCUST-BRP-LEAFLET-SCHEME,INCUST-SALESMAN-CODE,INCUST-TOBACCO-CLUB,INCUST-COUNTRY-CODE',
      regex: /^(.{9})(.{3})(.{3})(.{8})(.{40})(.{40})(.{40})(.{40})(.{40})(.{10})(.{60})(.{40})(.{40})(.{40})(.{40})(.{16})(.{32})(.{32})(.{32})(.{100})(.{1})(.{1})(.{1})(.{1})(.{1})(.{1})(.{1})(.{2})(.{2})(.{2})(.{2})(.{1})(.{1})(.{1})(.{1})(.{6})(.{1})(.{1})(.{6})(.{4})(.{5})(.{1})(.{2})$/d,
    },
    depot: {
      heading: 'INTDEPOT-STORE-ID,INTDEPOT-HUB-ID,INTDEPOT-NAME,INTDEPOT-ADDR1,INTDEPOT-ADDR2,INTDEPOT-ADDR3,INTDEPOT-ADDR4,INTDEPOT-ADDR5,INTDEPOT-ADDR6,INTDEPOT-CONTACT,INTDEPOT-EMAIL,INTDEPOT-TEL,INTDEPOT-FAX,INTDEPOT-ISDEL,INTDEPOT-COUNTRY',
      regex: /^(.{3})(.{2})(.{32})(.{32})(.{32})(.{32})(.{32})(.{32})(.{32})(.{50})(.{100})(.{32})(.{32})(.{1})(.{2})$/d
    },
    spendandsave: {
      heading: 'PERIOD NO,CUSTOMER NO,LINKED,TOTAL SPEND,TOB TOTAL SPEND,NONTOB TOTAL SPEND,CURR BAND NTOB,TOTAL REBATE,NTOB SPEND TO NEXT BAND,END OF PERIOD DATE,NEXT BAND NTOB PCT,EXTRA REBATE,NEXT BAND NTOB (Value),LAST TRADE DATE,MAXIMUM BAND SIZE,CURR BAND NTOB DEC,LP-TOTAL SPEND,LP-TOB TOTAL SPEND,LP-NONTOB TOTAL SPEND,LP-CURR BAND NTOB,LP-TOTAL REBATE,TESCO-TOTAL-REBATE,TESCO-LP-TOTAL-REBATE,TESCO-CURR-BAND,TESCO-LP-BAND,TESCO-CURR-SPEND,TESCO-LP-TOTAL-SPEND,TESCO-CURR-QUALIFYING-SPEND,TESCO-LP-QUALIFYING-SPEND,TESCO-PERIOD-NO,TESCO-END-OF-PERIOD-DATE,TESCO-END-OF-DATA-CHAR',
      regex: /^(.{6})(.{9})(.{3})(.{11})(.{11})(.{11})(.{3})(.{8})(.{8})(.{8})(.{3})(.{8})(.{6})(.{8})(.{3})(.{5})(.{11})(.{11})(.{11})(.{3})(.{8})(.{8})(.{8})(.{3})(.{3})(.{11})(.{11})(.{11})(.{11})(.{6})(.{8})(.{1})$/d
    },
    longtailproductnew: {
      heading: 'SUPPLIER-SUPPNO,MARKETPLACE-PRODUCT-CODE,SUPPLIER-OWN-ITEM-CODE,PRODUCT-DESC,BRAND-NAME,WEIGHTED,PACK-SIZE,STORAGE-TYPE,VAT-RATE%,HANDLING-TIME-DAYS,LAUNCH-DATE,BARCODE,TO-BE-SOLD-ON-WEBSITE,ITEM-IN-SELL-UNIT,WSP,RRP,WEIGHT,PRICE-PER-KG,POR,DATE-PRODUCT-LOADED,STATUS,INCOMPLETE-DATE,IN-REVIEW-DATE,SCHEDULED-DATE,LIVE-DATE,BOOKER-DELISTED-DATE,SUSPENDED-DATE,REJECTED-DATE,SUPPLIER-DELETE-DATE,WEB-SHELF-CODE,WEB-SHELF-DESC,WEB-AISLE-CODE,WEB-AISLE-DESC,WEB-DEPARTMENT-CODE,WEB-DEPARTMENT-DESC',
      regex: /^(.{7})(.{7})(.{15})(.{100})(.{30})(.{1})(.{12})(.{1})(?<decimal1_3>[^.]{6})(.{2})(.{8})(.{15})(.{1})(?<decimal2_3>[^.]{6})(?<decimal3_2>[^.]{8})(?<decimal4_2>[^.]{8})(?<decimal5_2>[^.]{6})(?<decimal6_2>[^.]{8})(?<decimal7_2>[^.]{4})(.{8})(.{1})(.{8})(.{8})(.{8})(.{8})(.{8})(.{8})(.{8})(.{8})(.{6})(.{40})(.{6})(.{40})(.{6})(.{40})$/d
    },
    tnareasons: {
      heading: 'INTTNA-STORE-ID,INTTNA-MASTER_MCODE,INTTNA-REASON_CODE,INTTNA-REPLACEMENT_MASTER_MCODE,INTTNA-AVAILABLE_DATE',
      regex: /^(.{3})(.{6})(.{1})(.{6})(.{8})$/d
    },
    custpref: {
      heading: 'INTPREF-ZCUSTOMER,INTPREF-CDATE,INTPREF-CTIME,INTPREF-ZBOOK_POST,INTPREF-ZTP_POST,INTPREF-ZBOOK_PHONE,INTPREF-ZTP_PHONE,INTPREF-ZBOOK_EMAILID1,INTPREF-ZBOOK_EMAIL1,INTPREF-ZTP_EMAIL1,INTPREF-ZCHANGE_DATE_EMAIL1,INTPREF-ZBOOK_EMAILID2,INTPREF-ZBOOK_EMAIL2,INTPREF-ZTP_EMAIL2,INTPREF-ZCHANGE_DATE_EMAIL2,INTPREF-ZBOOK_WMAIL,INTPREF-ZTP_WMAIL,INTPREF-ZCHANGE_DATE_WMAIL,INTPREF-ZBOOK_SMSNO1,INTPREF-ZBOOK_SMS1,INTPREF-ZTP_SMS1,INTPREF-ZBOOK_SMSNO2,INTPREF-ZCUST_GUID,INTPREF-ZECONOPID,INTPREF-ZRTFACILITYID,INTPREF-ZTOBSALES',
      regex: /^(.{9})(.{8})(.{6})(.{1})(.{1})(.{1})(.{1})(.{100})(.{1})(.{1})(.{8})(.{100})(.{1})(.{1})(.{8})(.{1})(.{1})(.{8})(.{32})(.{1})(.{1})(.{32})(.{36})(.{17})(.{32})(.{36})$/d
    },
    dropshipsuppcust: {
      heading: 'INTCUST-CUSTNO,SUPPLIER-SUPPNO,SUPP-CUST-RELATIONSHIP-STATUS,CUSTOMER-REQUEST-DT,APPROVAL-DT,DISAPPROVED-DT',
      regex: /^(.{9})(.{7})(.{1})(.{8})(.{8})(.{8})$/d
    },
    orders: {
      fh: {
        heading: 'INTCORD-FH-RECTYPE,INTCORD-FH-FILE-NUM,INTCORD-FH-FILE-DATE,INTCORD-FH-FILE-TIME',
        regex: /^(.{2})(.{8})(.{8})(.{4})$/d
      },
      oh: {
        heading: 'INTCORD-OH-RECTYPE,INTCORD-OH-STORE-ID,INTCORD-OH-CUSTNO,INTCORD-OH-ORDER-TYPE,INTCORD-OH-ORDER-NUM,INTCORD-OH-ORDER-DATE,INTCORD-OH-ORDER-TIME,INTCORD-OH-CARD-PAID,INTCORD-OH-AUTH-AMOUNT,INTCORD-OH-AUTH-EXPIRY,INTCORD-DELIVERY-DATE,INTCORD-ORDER-SOURCE,INTCORD-CUST-PO-NBR,INTCORD-COLLECTION-TIME,INTCORD-MOBILE-NUM,INTCORD-COLLECT-DELIVERED,INTCORD-E-MAIL REQUIRED,SUPPLIER-SUPPNO,INTCORD-STORE-ORDER-GROUP,INTCORD-LONDIS-ORDER-GROUP,INTCORD-OH-PAYMENT-TOKEN-ID,INTCORD-OH-TRANSACTION-IDENTIFIER',
        regex: /^(.{2})(.{5})(.{9})(.{1})(.{10})(.{8})(.{4})(.{1})(?<decimal1_2>[^.]{8})(.{8})(.{8})(.{1})(.{12})(.{4})(.{32})(.{1})(.{1})(.{7})(.{2})(.{1})(.{23})(.{58})$/d
      },
      od: {
        heading: 'INTCORD-OD-RECTYPE,INTCORD-OD-SUCODE,INTCORD-OD-DESC,INTCORD-OD-ITM-IN-SELL-UNT,INTCORD-OD-PCK-SIZE,INTCORD-OD-QUANTITY,INTCORD-OD-NOTES,INTCORD-OD-PRICE,SUPPLIER-OWN-ITEM-CODE,MARKETPLACE-PRODUCT-CODE',
        regex: /^(.{2})(.{6})(.{28})(.{4})(.{7})(.{5})(.{255})(?<decimal1_2>[^.]{8})(.{15})(.{7})$/d
      },
      oc: {
        heading: 'INTCORD-OC-RECTYPE,INTCORD-OC-COMMENT-TYPE,INTCORD-OC-COMMENT,INTCORD-OC-RECTYPE,INTCORD-OC-COMMENT-TYPE,INTCORD-OC-COMMENT,INTCORD-OC-RECTYPE,INTCORD-OC-COMMENT-TYPE,INTCORD-OC-COMMENT,INTCORD-OC-RECTYPE,INTCORD-OC-COMMENT-TYPE,INTCORD-OC-COMMENT',
        regex: /^(.{2})(.{1})(.{254})$/d
      },
      ot: {
        heading: 'INTCORD-OT-RECTYPE,INTCORD-OT-DEPOT,INTCORD-OT-CUSTOMER-NUM,INTCORD-OT-ORDER-NUM,INTCORD-OT-DET-LINE-CNT',
        regex: /^(.{2})(.{5})(.{9})(.{11})(.{5})$/d
      },
      fl: {
        heading: 'INTCORD-FL-RECTYPE,INTCORD-FL-FILE-NUM,INTCORD-FL-ORDERS-CNT',   
        regex: /^(.{2})(.{8})(.{8})$/d
      }
    },
    bestsellers: {
      heading: 'INTCATSET-GROUP-SECTOR,INTCATSET-SUCODE,INTCATSET-QUANTITY',
      regex: /^(.{2})(.{6})(.{7})$/d
    },
    claimstatus: {
      heading: 'CLSTAT-HD-REFERENCE,CLSTAT-HD-STATUS,CLSAT-CL-LINE-NO,CLSAT-CL-SUCODE,CLSAT-CL-VALUE,CLSTAT-CL-STATUS-CODE,CLSTAT-CL-STATUS-REASON-CODE,CLSTAT-CL-STATUS-SUB-REASON-CODE,CLSTAT-CL-ADD-INFO,CLSTAT-CL-DC-COMMENTS,CLSTAT-APP-DATE,CLSTAT-APP-TIME,CLSTAT-CHG-DATE,CLSTAT-CHG-TIME,CLAIM-DL-CASE-QTY,CLAIM-DL-UNIT-QTY',
      regex: /^(.{11})(.{2})(.{4})(.{6})(.{10})(.{2})(.{2})(.{2})(.{150})(.{150})(.{8})(.{6})(.{8})(.{6})(.{6})(.{6})$/d
    },
    pricelist: {
      heading: 'PRCLIST-NACNO,PRCLIST-SUCODE,PRCLIST-ARTICLE-CODE,PRCLIST-PRICE,PRCLIST-ITM-IN-SELL-UNT,PRCLIST-UNITID,PRCLIST-CUST-OWN-CODE,PRCLIST-ISDEL,PRCLIST-RSP',
      regex: /^(.{6})(.{6})(.{6})(?<decimal1_2>[^.]{8})(?<decimal2_3>[^.]{6})(.{1})(.{15})(.{1})(?<decimal3_2>[^.]{8})$/d
    },
    promo: {
      heading: 'INTPROMO-PROMO-ID,INTPROMO-CAMPAIGN-ID,INTPROMO-TYPE,INTPROMO-IMAGE-ID,INTPROMO-DESC,INTPROMO-START-DATE,INTPROMO-START-TIME,INTPROMO-END-DATE,INTPROMO-END-TIME,INTPROMO-LOYALITY-CLB-ONLY,INTPROMO-IS-ONE-TIME,INTPROMO-ISDEL',
      regex: /^(.{10})(.{10})(.{4})(.{10})(.{255})(.{12})(.{8})(.{12})(.{8})(.{1})(.{1})(.{1})$/d
    },
    promoset: {
      heading: 'INTPRSET-SET-ID,INTPRSET-PROMO-ID,INTPRSET-QUANTITY,INTPRSET-MAX-QUANT,INTPRSET-LOYALITY-POINTS-RWD,INTPRSET-REDUCTION,INTPRSET-DISCOUNT-QTY,INTPRSET-DISCOUNT,INTPRSET-COST-THRESHOLD,INTPRSET-COST-MULTIPLIER,INTPRSET-COST-FROM,INTPRSET-COST-TO,INTPRSET-COUPON-PROM-ID,INTPRSET-ISDEL',
      regex: /^(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{10})(.{1})$/d
    },
    promotostore: {
      heading: 'INTPRDEP-STORE-ID,INTPRDEP-PROMO-ID,INTPRDEP-ISDEL,NOT-USED?THIS-IS-NOT-ON-THE-INTERFACE',
      regex: /^(.{10})(.{10})(.{1})(.{19})$/d
    },
    productinpromoset: {
      heading: 'INTPRDPR-SET-ID,INTPRDPR-SUCODE,INTPRDPR-ISDEL',
      regex: /^(.{10})(.{10})(.{1})$/d
    },
    supplier: {
      heading: 'SUPPLIER-SUPPNO,SUPPLIER-SUPPNAME,SUPPLIER-SUPPSTATUS,SUPPLIER-STREET-2,SUPPLIER-STREET-3,SUPPLIER-STREET-NO,SUPPLIER-STREET-4,SUPPLIER-STREET-5,SUPPLIER-TOWN,SUPPLIER-COUNTY,SUPPLIER-POSTCODE,SUPPLIER-CONTACT-TITLE,SUPPLIER-CONTACT-INITS,SUPPLIER-CONTACT-SURNAME,SUPPLIER-TELEPHONE,SUPPLIER-MOBILE-PHONE,SUPPLIER-LT-EMAIL,SUPPLIER-LONGTAIL-TYPE',
      regex: /^(.{7})(.{30})(.{1})(.{40})(.{40})(.{10})(.{40})(.{40})(.{40})(.{40})(.{16})(.{8})(.{4})(.{40})(.{32})(.{32})(.{100})(.{1})$/d
    },
    brpschedule: {
      heading: 'ORDCUT-CUSTNO,ORDCUT-FACIA-TYPE,ORDCUT-STORE-ORDER-GROUP,ORDCUT-LONDIS-ORDER-GROUP,ORDCUT-WK-COM-DATE,ORDCUT-CUT-OFF-DATE,ORDCUT-CUT-OFF-TIME,ORDCUT-SOURCE-TIME,ORDCUT-DELIVERY-DATE,ORDCUT-DELIVERY-TIME',
      regex: /^(.{9})(.{2})(.{2})(.{1})(.{8})(.{8})(.{4})(.{4})(.{8})(.{2})$/d
    }
}