var bodyParts = [{ head1: 'dolphin head', head2: 'dog head', head3: 'horse head' },
{ leftArm1: 'gorrila arm', leftArm2: 'monkey arm', leftArm3: 'pigeon wing' },
{ rightArm1: 'nemo fin', rightArm2: 'teminator arm', rightArm3: 'fairy wing' },
{ leftLeg1: 'horse leg', leftLeg2: 'mermaid tail', leftLeg3: 'giraffe leg' },
{ rightLeg1: 'elephant leg', rightLeg2: 'dinosaur leg', rightLeg3: 'camel leg' }];


let SingleMonster = bodyParts.reduce(function(x, y, z){
    console.log(x,y,z)
}, {})