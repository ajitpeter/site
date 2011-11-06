describe 'Location', ->
  it 'should be able to produce a location hash when asked', ->
    response = {'latitude': 51.495569, 'longitude': -0.176414}
    l = new EMG.Location(response)
    expect(l.getLocation()).toEqual {'lat': response.latitude, 'lon': response.longitude}

  it 'shows the name when asked', ->
    expected = {'name': 'A location'}
    l = new EMG.Location(expected)
    expect(l.getName()).toEqual expected.name
