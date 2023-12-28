//material images
//aluminium
import al1x2 from '../assets/img/material/aluminium1x2.png';
import al1x3 from '../assets/img/material/aluminium1x3.png';
import al1x4 from '../assets/img/material/aluminium1x4.png';
import al2x3 from '../assets/img/material/aluminium2x3.png';
import al3x4 from '../assets/img/material/aluminium3x4.png';
import al3x5 from '../assets/img/material/aluminium3x5.png';

//steel
import st1x2 from '../assets/img/material/steel-1x2.png';
import st1x3 from '../assets/img/material/steel-1x3.png';
import st1x4 from '../assets/img/material/steel-1x3.png';
import st2x3 from '../assets/img/material/steel-2x3.png';
import st3x4 from '../assets/img/material/steel-3x4.png';
import st3x5 from '../assets/img/material/steel3x5.png';

//plastic
import pl1x2 from '../assets/img/material/plastic1x2.png';
import pl1x3 from '../assets/img/material/plastic1x3.png';
import pl1x4 from '../assets/img/material/plastic1x4.png';
import pl2x3 from '../assets/img/material/plastic2x3.png';
import pl3x4 from '../assets/img/material/plastic3x4.png';
import pl3x5 from '../assets/img/material/plastic3x5.png';

//acrylic
import acry1x2 from '../assets/img/material/acrylic1x2.png';
import acry1x3 from '../assets/img/material/acrylic1x3.png';
import acry1x4 from '../assets/img/material/acrylic1x4.png';
import acry2x3 from '../assets/img/material/acrylic2x3.png';
import acry3x4 from '../assets/img/material/acrylic3x4.png';
import acry3x5 from '../assets/img/material/acrylic3x5.png';

//ABC Plastic
import ABC1x2 from '../assets/img/material/ABC-1x2.png';
import ABC1x3 from '../assets/img/material/ABC-1x3.png';
import ABC1x4 from '../assets/img/material/ABC-1x4.png';
import ABC2x3 from '../assets/img/material/ABC-2x3.png';
import ABC3x4 from '../assets/img/material/ABC-3x4.png';
import ABC3x5 from '../assets/img/material/ABC-3x5.png';

//metal sheet
import metal1x2 from '../assets/img/material/metal-1x2.png';
import metal1x3 from '../assets/img/material/metal-1x3.png';
import metal1x4 from '../assets/img/material/metal-1x4.png';
import metal2x3 from '../assets/img/material/metal-2x3.png';
import metal3x4 from '../assets/img/material/metal-3x4.png';
import metal3x5 from '../assets/img/material/metal-3x5.png';

//stainless steel
import stain1x2 from '../assets/img/material/stainless-1x2.png';
import stain1x3 from '../assets/img/material/stainless-1x3.png';
import stain1x4 from '../assets/img/material/stainless-1x4.png';
import stain2x3 from '../assets/img/material/stainless-2x3.png';
import stain3x4 from '../assets/img/material/stainless-3x4.png';
import stain3x5 from '../assets/img/material/stainless-3x5.png';

// new material types
import aluminium from '../assets/img/material-type/aluminium.png';
import plainsteel from '../assets/img/material-type/plain-steel.png';
import stainlesssteel from '../assets/img/material-type/stainless-steel.png';
import metalsheet from '../assets/img/material-type/metal-sheet.png';

const materialToIdentifier = {
	Aluminium: [al1x2, al1x3, al1x4, al2x3, al3x4, al3x5],
	'Plain Steel': [st1x2, st1x3, st1x4, st2x3, st3x4, st3x5],
	'Stainless Steel': [stain1x2, stain1x3, stain1x4, stain2x3, stain3x4, stain3x5],
	'Metal Sheet': [metal1x2, metal1x3, metal1x4, metal2x3, metal3x4, metal3x5],
	'Plain Plastic': [pl1x2, pl1x3, pl1x4, pl2x3, pl3x4, pl3x5],
	'ABC Plastic': [ABC1x2, ABC1x3, ABC1x4, ABC2x3, ABC3x4, ABC3x5],
	'Acrylic Plastic': [acry1x2, acry1x3, acry1x4, acry2x3, acry3x4, acry3x5],
};

const materialToSize = {
	'1x2': 0,
	'1x3': 1,
	'1x4': 2,
	'2x3': 3,
	'3x4': 4,
	'3x5': 5,
};

export const getMaterial = (identifier, size) => {
	let material;
	// get martial array
	material = materialToIdentifier[identifier];
	// get the index with materialToSize and use to get the specific material size from the array
	material = material[materialToSize[size]];
	// return the material url
	return material;
};

const materialsSrc = [
	{ name: 'Aluminium', src: aluminium },
	{ name: 'Plain Steel', src: plainsteel },
	{ name: 'Stainless Steel', src: stainlesssteel },
	{ name: 'Metal Sheet', src: metalsheet },
];

export const getMaterialSrc = (identifier) => {
	const material = materialsSrc.find((material) => material.name === identifier);
	return material.src;
};
