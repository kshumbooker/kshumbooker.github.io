.keywordsuggestion {
  border: 1px solid #2356AA;
}

header .suggestions-result div a {
  border-bottom: 0;
  font-weight: 900;
  padding-left: 0;
  text-align: left;
}

header .suggestions-result div a:hover {
	background: transparent;
	color: #2356AA;
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

.searchDropdownParent select, .searchDropdownParent select:focus {
	width: 140px;
}

.searchDropdownParent select > option {
	text-align: center;
}

header .suggestions-result {
  left: 140px;
  width: calc(100% - 11.5em);
	border: 0;
	height: 500px;
	overflow: auto;

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
	  display:inline-block; 
	  font-weight:bold; 
	  color:#fff;
	  background-color: #2356AA;
  }
  
  .searchDropdown {
	  display:block;
		margin-left: auto;
		margin-right: auto;
	  height:100%; 
	  border:0px; 
	  padding-right:0.5em; 
	  font-weight: 500 !important; 
	  color:#fff;
	  background-color: #2356AA;
		text-align: center;
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
			width: 18px;
		}

		.searchDropdown {
			width: 100%;
		}

		.searchDropdownParent select {
			direction: rtl;
		}

		.searchDropdownParent select > text {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}

		.searchDropdownParent select:focus {
			max-width: 125px;
		}

  }
	
