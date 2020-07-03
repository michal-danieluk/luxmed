function zbierzIloscPaktietow() {
  const pakietBezDoplatyPodstawowyIndywidualny = document.getElementById(
    "pakietBezDoplatyPodstawowyIndywidualny"
  ).value;
  const pakietZDoplataPodstawowyIndywidualny = document.getElementById(
    "pakietZDoplataPodstawowyIndywidualny"
  ).value;
  const pakietBezDoplatyPodstawowyRodzinny = document.getElementById(
    "pakietBezDoplatyPodstawowyRodzinny"
  ).value;
  const pakietZDoplataPodstawowyRodzinny = document.getElementById(
    "pakietZDoplataPodstawowyRodzinny"
  ).value;
  const pakietBezDoplatyRozszerzonyIndywidualny = document.getElementById(
    "pakietBezDoplatyRozszerzonyIndywidualny"
  ).value;
  const pakietZDoplataRozszerzonyIndywidualny = document.getElementById(
    "pakietBezDoplatyRozszerzonyIndywidualny"
  ).value;
  const pakietBezDoplatyRozszerzonyRodzinny = document.getElementById(
    "pakietBezDoplatyRozszerzonyIndywidualny"
  ).value;
  const pakietZDoplataRozszerzonyRodzinny = document.getElementById(
    "pakietBezDoplatyRozszerzonyIndywidualny"
  ).value;
  const pakietBezDoplatyKompleksowyIndywidualny = document.getElementById(
    "pakietBezDoplatyRozszerzonyIndywidualny"
  ).value;
  const pakietBezDoplatyKompleksowyRodzinny = document.getElementById(
    "pakietBezDoplatyRozszerzonyIndywidualny"
  ).value;

  // if (condition) {
  /*
3-10 = 57; 58,5
11-20 = 54; 55,15
21-30 =  52; 53,15
*/

  // }
  const cenaPakietuIndywidualnego = (
    pakietBezDoplatyPodstawowyIndywidualny
  ) => {
    if (pakietBezDoplatyPodstawowyIndywidualny <= 10) {
      var netto = "57";
      var brutto = "58,5";
      return (
        "<p>Netto " +
        pakietBezDoplatyPodstawowyIndywidualny * netto +
        " PLN</p>"
      );
    }
    if (pakietBezDoplatyPodstawowyIndywidualny <= 20) {
      netto = 54;
      brutto = "55,5";
      return (
        "<p>Netto " +
        pakietBezDoplatyPodstawowyIndywidualny * netto +
        " PLN</p>"
      );
    }
    if (pakietBezDoplatyPodstawowyIndywidualny >= 21) {
      netto = 52;
      brutto = "53,5";
      return (
        "<p>Netto " +
        pakietBezDoplatyPodstawowyIndywidualny * netto +
        " PLN</p>"
      );
    }
  };

  const pakietCena = cenaPakietuIndywidualnego(
    pakietBezDoplatyPodstawowyIndywidualny
  );
  console.log(
    pakietBezDoplatyPodstawowyIndywidualny,
    pakietZDoplataPodstawowyIndywidualny
  );
  console.log(
    cenaPakietuIndywidualnego(pakietBezDoplatyPodstawowyIndywidualny)
  );

  document.querySelector(
    ".bez-doplaty--js"
  ).innerHTML = cenaPakietuIndywidualnego(
    pakietBezDoplatyPodstawowyIndywidualny
  );
  //sumaPakietu += pakietCena;

  console.log(pakietCena);
}
