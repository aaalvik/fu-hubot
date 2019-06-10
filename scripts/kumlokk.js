const photos = {
    bergen: 'http://kumlokk.no/wp-content/uploads/2015/08/nr2-bergen-kulturlokk-2000.jpg',
    haugesund: 'http://kumlokk.no/wp-content/uploads/2015/08/haugesund-kumlokk.jpg',
    bomlo: 'http://kumlokk.no/wp-content/uploads/2015/08/bomlo-kumlokk.jpg',
    tysvaer: 'http://kumlokk.no/wp-content/uploads/2015/08/tysvaer-kommune-kumlokk.jpg',
    notodden: 'http://kumlokk.no/wp-content/uploads/2015/08/notodden-kommune.jpg',
    skien: 'http://kumlokk.no/wp-content/uploads/2015/08/skien-kommune-kumlokk.jpg', // 8
    stavanger: 'http://kumlokk.no/wp-content/uploads/2015/08/stavanger-kommune-vann-avlop-kumlokk.jpg', // 9
    mosjoen: 'http://kumlokk.no/wp-content/uploads/2015/08/mosjoen-vefsn-kommune-kumlokk.jpg', // 10 
    vefsn: 'http://kumlokk.no/wp-content/uploads/2015/08/mosjoen-vefsn-kommune-kumlokk.jpg', // 10, samme som over 
    trondheim: 'http://kumlokk.no/wp-content/uploads/2015/08/trondheim-kommune-kumlokk.jpg', // 11
    alta: 'http://kumlokk.no/wp-content/uploads/2015/08/alta-kommune-kumlokk.jpg', // 12
    drammen: 'http://kumlokk.no/wp-content/uploads/2015/08/drammen-kommune-kumlokk.jpg', // 13
    narvik: 'http://kumlokk.no/wp-content/uploads/2015/08/narvik-by-kumlokk.jpg', // 14
    andoy: 'http://kumlokk.no/wp-content/uploads/2015/08/andoy-kommune-kumlokk.jpg', // 15
    sauda: 'http://kumlokk.no/wp-content/uploads/2015/08/sauda-kommune-kumlokk.jpg', // 16
    karmoy: 'http://kumlokk.no/wp-content/uploads/2015/08/karmoy-kommune-kumlokk.jpg', // 17
    gjovik: 'http://kumlokk.no/wp-content/uploads/2015/08/gjovik-kommune-kumlokk.jpg', // 18
    stord: 'http://kumlokk.no/wp-content/uploads/2015/08/stord-kommune-kumlokk.jpg', // 19
    molde: 'http://kumlokk.no/wp-content/uploads/2015/08/molde-kommune-kumlokk.jpg', // 20
    tonsberg: 'http://kumlokk.no/wp-content/uploads/2015/08/nr21-tonsberg-kommune-kumlokk.jpg', // 21
    kristiansand: 'http://kumlokk.no/wp-content/uploads/2015/08/nr23-kristiansand-kumlokk.jpg', // 23 
    oslo: 'http://kumlokk.no/wp-content/uploads/2015/08/nr24-oslo-kommune.jpg', // 24
    kongsberg: 'http://kumlokk.no/wp-content/uploads/2015/08/nr26-kongsberg-kommune.jpg', // 26
    lindesnes: 'http://kumlokk.no/wp-content/uploads/2015/08/nr27-lindesnes-kommune.jpg', // 27 
    larvik: 'http://kumlokk.no/wp-content/uploads/2015/08/nr28-larvik-kommune.jpg', // 28
    fauske: 'http://kumlokk.no/wp-content/uploads/2015/08/nr29-fauske-kommune.jpg', // 29
    flekkefjord: 'http://kumlokk.no/wp-content/uploads/2015/08/nr30-flekkefjord-kommune.jpg', // 30
    eid: 'http://kumlokk.no/wp-content/uploads/2015/08/nr31-eid-kommune.jpg', // 31
    stange: 'http://kumlokk.no/wp-content/uploads/2015/08/nr31-stange-kommune.jpg', // 32
    verdal: 'http://kumlokk.no/wp-content/uploads/2015/08/nr33-verdal-kommune.jpg', // 33
    tvedestrand: 'http://kumlokk.no/wp-content/uploads/2015/08/nr34-arendal-kommune.jpg', // 34
    ringsaker: 'http://kumlokk.no/wp-content/uploads/2015/08/nr35-ringsaker-kommune.jpg', // 35
    kristiansund: 'http://kumlokk.no/wp-content/uploads/2015/08/nr37-kristiansund-kommune.jpg', // 37
    fredrikstad: 'http://kumlokk.no/wp-content/uploads/2018/10/nr38-Fredrikstad.jpg', // 38
    hamar_ol: 'http://kumlokk.no/wp-content/uploads/2015/08/nr38-hamar-ol94.jpg', // 38
    lillehammer_ol: 'http://kumlokk.no/wp-content/uploads/2015/08/nr38-hamar-ol94.jpg', // 38
    ullensaker: 'http://kumlokk.no/wp-content/uploads/2015/08/nr41-ullensaker-kommune.jpg', // 41
    bodo: 'http://kumlokk.no/wp-content/uploads/2015/08/nr42-bodo-kommune.jpg', // 42
    arendal: 'http://kumlokk.no/wp-content/uploads/2015/08/nr43-grimstad-kommune.jpg', //43
    porsgrunn: 'http://kumlokk.no/wp-content/uploads/2015/08/nr46-porsgrunn-kommune.jpg', // 46
    eidsvoll: 'http://kumlokk.no/wp-content/uploads/2015/08/nr48-eidsvoll-kommune.jpg', // 48
    tromso: 'http://kumlokk.no/wp-content/uploads/2015/08/nr49-tromso-kommune.jpg', // 49
    halden: 'http://kumlokk.no/wp-content/uploads/2015/08/nr50-halden-kommune.jpg', // 50
    nannestad: 'http://kumlokk.no/wp-content/uploads/2015/08/nr53-nannestad-kommune.jpg', // 53
    gjesdal: 'http://kumlokk.no/wp-content/uploads/2015/08/nr54-algard-kommune.jpg', // 54
    algard: 'http://kumlokk.no/wp-content/uploads/2015/08/nr54-algard-kommune.jpg', // 54
    lillehammer: 'http://kumlokk.no/wp-content/uploads/2015/08/nr55-lillehammer-kommune.jpg', // 55
    holmestrand: 'http://kumlokk.no/wp-content/uploads/2016/02/nr8-Holmestrand.jpg', //52
    sandnes: 'http://kumlokk.no/wp-content/uploads/2018/10/nr.-12-Sandnes-nytt.jpg', // 12
    grimstad: 'TODO',
}

// husk navn som inneholder ø/å/æ: æ => ae, ø => o, 

const searchstring = 'arendal'

