	var text = "";
	
	//(ι): durée d'une heure temp.
	var dr_hr;
	
	// horaires des heures temp.
	var h;
	
	// open html tag details
	var det = "<details>"
	det += "<summary>"
	det += "détails</summary>";
	
	function beautify() {
		text = text.replaceAll(
		" 0h", " ");
		text = text.replaceAll(
		"m0s", "");
		text = text.replaceAll(
		" <span>0h", " <span>");
		text = text.replaceAll(
		"m0<\/span>s", "</span>");
	}
	
	// [create] span [html] tags
	function spntgs (i, prt) {
		let tag1 = (prt == 0 && 
		(i == 3 || i == 6 || i == 9) ?
		 "<span>" : "");
		 let tag2 = (tag1 == "<span>"
		 ? "</span>" : "");
		 return [tag1, tag2];
	}
	
	// [afficher une] heure
	function hr (i, prt, t) {
		return h[i][prt][0] + "h" 
		+ h[i][prt][1] + t + "m"
		+ h[i][prt][2] + "s.";
	}
	
	// [afficher la] phrase
	function phrs (i, prt) {
		let t = spntgs(i, prt);
		return " de la " + i + 
		(i == 1 ? "ère " : "ème ") + 
		"heure: " + t[0] + 
		hr(i - 1, prt, t[1]);
	}
	
	// open [html tag] details
	function odtls (i) {
		return i == 1 || i == 3 || 
		i == 6 || i == 9 ? det : "";
	}
	
	// close [html tag] details
	function cdtls (i) {
		return i == 2 || i == 5 ||
		i == 8 || i ==  12 ?
		"</details>" : "<br>";
	}
	
	// afficher [les] horaires
	function ffch_hrrs () {
		text += "<br><br>";
		for(let i = 1; i < 13; i++) {
			text += "Début" + 
			phrs(i, 0) + "<br>" + 
			odtls(i) + "Moitié" +
			phrs(i, 1) + cdtls(i)
			+ "<br>";
		}
	}
	
	// afficher (ι)
	function ffch_dr_hr () {
		text += "<br>1 heure "
		+ "temporaire: " + "<span>"
		+ dr_hr[0] + "h" + dr_hr[1] 
		+ "m" + "</span>" + 
		dr_hr[2] + "s.";
	}
	
	// afficher
	function ffch () {
		ffch_dr_hr();
		ffch_hrrs();
	}
	
	// mettre-à-jour
	function mttr_jr (h, i) {
		h[i + 1] = 0;
		h[i]++;
		return h;
	}
	
	// verifier
	function vrfr (h) {
		if(h[2] == 60) {
			mttr_jr(h, 1);
			if(h[1] == 60)
				mttr_jr(h, 0);
		}
		return h;
	}
	
	/* découpe des minutes 
	   [0] : hr, [1] : mnt, 
	   [2] : scnd
	*/
	function dcp_mnts (mnts) {
		let hd = mnts / 60.0;
		let h = [];
		h[0] = parseInt(hd);
		let hd2 = (hd - h[0]) * 60.0;
		h[1] = parseInt(hd2);
		let hd3 = (hd2 - h[1]) * 60.0;
		h[2] = Math.round(hd3);
		return vrfr(h);
	}
	
	function crrH () {
		return Array(12).fill().map(
		e => Array(2).fill().map(
		e => Array(3).fill().map(
		e => e)));
	}
	
	/* [x] : id_hr, [x][y] : y : 
	   0 : dbt, 1 : mt
	   nhr : nouvelle heure
	*/
	function id_hr (mnts, nhr_mnt) {
		var h = crrH ();
		for(let i = 0; i < 12; i++) {
			h[i][0] = dcp_mnts(nhr_mnt);
			nhr_mnt += mnts / 2.0;
			h[i][1] = dcp_mnts(nhr_mnt);
			nhr_mnt += mnts - mnts / 2.0;
		}
		return h;
	}
	
	// [convertit] en entier
	function n_ntr (prm) {
		return parseInt(prm);
	}
	
	// [convertit] en décimal
	function n_dcml (prm) {
		return parseFloat(prm);
	}

	/* lev: lever du soleil (en min.)
	   dur: durée du jour (en min.) 
	*/
	function main (lev, dur) {
		let lv = n_dcml(lev);
		let dr = n_ntr(dur);
		let mnts =  dr / 12.0;
		h = id_hr(mnts, lv);
		dr_hr = dcp_mnts(mnts);
		ffch(); beautify();
	}
