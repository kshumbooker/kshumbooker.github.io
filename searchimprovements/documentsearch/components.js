.keywordsuggestion {
  border: 1px solid #2356AA;
}

header .suggestions-result div a {
  border-bottom: 0;
  font-weight: 900;
  padding-left: 0;
  text-align: left;
}

.keywordsuggestion .price, .keywordsuggestion .rrp {
  margin: 0;
  font-weight: 900;
  display: block;
	text-align: right;
}

.keywordsuggestion .rrp, .keywordsuggestion .volume, .keywordsuggestion .category {
  color: #909090;
  margin: 0;
}


header .suggestions-result {
  left: 140px;
  width: calc(100% - 11.5em);
	border: 0;
	box-shadow: none;
}

.suggestion-keywords {
	border: 2px solid #2356AA !important;
	color: #777 !important;
  }
  
  .suggestion-keywords::placeholder {
	color: #9b9ec4 !important;
  }
  
  .searchDropdownParent {
	  border:2px solid #2356AA; 
	  border-top-left-radius: 5px !important;
	  border-bottom-left-radius: 5px !important;
	  border-right:0; 
	  width: 140px;
	  display:inline-block; 
	  font-weight:bold; 
	  color:#fff;
	  background-color: #2356AA;
  }
  
  .searchDropdown {
	  display:block; 
	  width:100%; 
	  height:100%; 
	  border:0px; 
	  padding-right:0.5em; 
	  font-weight: 500 !important; 
	  color:#fff;
	  background-color: #2356AA;
		text-align: center;
  }

  
  .searchDropdown option {
	display: block;
	border-radius: 0;
	padding: 1em;
	font-weight: 400;
	border-bottom: 2px solid #2356AA;
	color:#fff;
	background-color: #2356AA;
  }
  
  #search-input button {
	border-radius: 5px !important;
	border-top-left-radius: 0 !important;
	border-bottom-left-radius: 0 !important;
  }


  @media (max-width: 1200px) {
    .keywordsuggestion .price, .keywordsuggestion .rrp {
      text-align: left;
    }
  }

	@media (min-width: 900px) {
		.scanner-picker {
			display: none;
		}
	}

	@media (max-width: 900px) {
		header .suggestions-result {
			left: 140px;
			width: calc(100% - 15.5em);
			border: 0;
			box-shadow: none;
		}
	}

	@media (max-width: 576px) {
    
		.searchDropdownParent {
			width: 20px;
		}

		header .suggestions-result {
			left: 0;
			width: 100%;
		}

		.keywordsuggestion i, .keywordsuggestion a {
			margin-top: 10px;
		}

		.searchDropdownParent {
			padding-left: 0;
			padding-right: 0;
		}
  }
	
