const completedPlaces = [
  7207,  // DE
  7008,  // BE
  8147,  // LU
  7506,  // NL
  6753,  // FR
  6718,  // IE
  7236,  // CH
  7016,  // NO
  8051,  // DA
  6857,  // UK
  6774,  // ES
  8227,  // MC
  7122,  // PT
  10282, // AX
  10298, // XK
  7020,  // FI
  8265,  // EE
  8050,  // LV
  8266,  // LT
  7800,  // PL
  7578,  // BY
  8267,  // SK
  8264,  // CZ
  8263,  // LI
  7399,  // HU
  8057,  // AT
  10310, // SM
  9213,  // VA
  8240,  // MT
  7599,  // SE
  7278,  // IC
  10290, // FO
  6973,  // IT
  8228,  // SI
]

const currentPlace = 8860 // UK

{
  const a = document.getElementById('link-inat-maintain')
  a.setAttribute('href', `${a.href}&place_id=${completedPlaces}`)
}
{
  const a = document.getElementById('link-inat-identify')
  a.setAttribute('href', `${a.href}&place_id=${completedPlaces}`)
}
{
  const a = document.getElementById('link-inat-annotate')
  a.setAttribute('href', `${a.href}&place_id=${currentPlace}`)
}
