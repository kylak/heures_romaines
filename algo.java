public class algo {

	//(ι): durée d'une heure temp.
	public static int[]dr_hr;
	
	// horaires des heures temp.
	public static int[][][]h;
	
	// [afficher une] heure
	public static String hr
	(int i, int prt) {
		return h[i][prt][0] + "h" 
		+ h[i][prt][1] + "m" + 
		h[i][prt][2] + "s";
	}
	
	// [afficher la] phrase
	public static String phrs
	(int i, int prt) {
		return " de la " + i + 
		(i == 1 ? "ère " : "ème ") + 
		"heure: " + hr(i - 1, prt);
	}
	
	// afficher [les] horaires
	public static void ffch_hrrs () {
		System.out.println();
		for(int i = 1; i < 13; i++) {
			System.out.println("Début" + 
			phrs(i, 0) + "\nMoitié" + 
			phrs(i, 1) + "\n");
		}
	}
	
	// afficher (ι)
	public static void ffch_dr_hr
	() {
		System.out.println();
		System.out.println("1 heure "
		+ "temporaire: " + dr_hr[0]
		+ "h" + dr_hr[1] + "m" + 
		dr_hr[2] + "s.");
	}
	
	// afficher
	public static void ffch () {
		ffch_dr_hr();
		ffch_hrrs();
	}
	
	// mettre-à-jour
	public static int[] mttr_jr
	(int[] h, int i) {
		h[i + 1] = 0;
		h[i]++;
		return h;
	}
	
	// verifier
	public static int[] vrfr
	(int[] h) {
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
	public static int[] dcp_mnts
	(float mnts) {
		float hd = mnts / 60.F;
		int[] h = new int[3];
		h[0] = (int) hd;
		float hd2 = (hd - h[0]) * 60.F;
		h[1] = (int) hd2;
		float hd3 = (hd2 - h[1]) * 60.F;
		h[2] = Math.round(hd3);
		return vrfr(h);
	}
	
	public static int[][][] crrH
	() {
		return new int[12][2][3];
	}
	
	/* [x] : id_hr, [x][y] : y : 
	   0 : dbt, 1 : mt
	   nhr : nouvelle heure
	*/
	public static int[][][] id_hr
	(float mnts, float nhr_mnt) {
		int[][][] h = crrH();
		for(int i = 0; i < 12; i++) {
			h[i][0] = dcp_mnts(nhr_mnt);
			nhr_mnt += mnts / 2.F;
			h[i][1] = dcp_mnts(nhr_mnt);
			nhr_mnt += mnts - mnts / 2.F;
		}
		return h;
	}
	
	// [convertit] en décimal
	public static float n_dcml
	(String prm) {
		return Float.parseFloat(prm);
	}
	
	// [convertit] en entier
	public static int n_ntr
	(String prm) {
		return Integer.parseInt(prm);
	}

	/* args[0]: lever du soleil (en min.)
	   args[1]: durée du jour (en min.) 
	*/
	public static void main 
	(String[] args) {
		int dr = n_ntr(args[1]);
		float lv = n_dcml(args[0]);
		float mnts =  dr / 12.F;
		h = id_hr(mnts, lv);
		dr_hr = dcp_mnts(mnts);
		ffch();
	}
}