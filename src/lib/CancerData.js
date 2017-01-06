const cancerData = {
  "status": "complete",
  "anatomy": [
    { "name": "Adrenal Gland", "count": 1 },
    { "name": "Biliary Tract", "count": 5 },
    { "name": "Bladder/Urinary Tract", "count": 7 },
    { "name": "Blood", "count": 8 },
    { "name": "Bone", "count": 2 },
    { "name": "Bowel", "count": 5 },
    { "name": "Breast", "count": 9 },
    { "name": "CNS/Brain", "count": 12 },
    { "name": "Cervix", "count": 1 },
    { "name": "Esophagus/Stomach", "count": 10 },
    { "name": "Eye", "count": 1 },
    { "name": "Head and Neck", "count": 11 },
    { "name": "Kidney", "count": 10 },
    { "name": "Liver", "count": 4 },
    { 
      "name": "Lung",
      "count": 11,
      "children": [
        { 
          "name": "Lung Neuroendocrine Tumor"
        },
        { 
          "name": "Non-Small Cell Lung Cancer",
          "children": [
            { "name": "LUNG ADENOCARCINOMA" },
            { "name": "LUNG SQUAMOUS CELL CARCINOMA" } 
          ]
        }
    ]},
    { "name": "Other", "count": 2 },
    { "name": "Ovary", "count": 3 },
    { "name": "Pancreas", "count": 7 },
    { "name": "Peripheral Nervous System", "count": 1 },
    { "name": "Pleura", "count": 2 },
    { "name": "Prostate", "count": 11 },
    { "name": "Skin", "count": 6 },
    { "name": "Soft Tissue", "count": 3 },
    { "name": "Testis", "count": 1 },
    { "name": "Thymus", "count": 2 },
    { "name": "Thyroid", "count": 3 },
    { "name": "Uterus", "count": 4 }
  ],
  "cancerTypes": [
    {
      "typeOfCancerId": "mychs",
      "name": "Myxoid Chondrosarcoma",
      "clinicalTrialKeywords": "myxoid chondrosarcoma",
      "dedicatedColor": "White",
      "shortName": "MYCHS",
      "parent": "chs"
    },
    {
      "typeOfCancerId": "unec",
      "name": "Uterine Neuroendocrine Carcinoma",
      "clinicalTrialKeywords": "uterine neuroendocrine carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UNEC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "nmzl",
      "name": "Nodal Marginal Zone Lymphoma",
      "clinicalTrialKeywords": "nodal marginal zone lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "NMZL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "tcca",
      "name": "Choriocarcinoma",
      "clinicalTrialKeywords": "choriocarcinoma",
      "dedicatedColor": "Red",
      "shortName": "TCCA",
      "parent": "nsgct"
    },
    {
      "typeOfCancerId": "ptpr",
      "name": "Papillary Tumor of the Pineal Region",
      "clinicalTrialKeywords": "papillary tumor of the pineal region",
      "dedicatedColor": "Gray",
      "shortName": "PTPR",
      "parent": "pint"
    },
    {
      "typeOfCancerId": "biliary_tract",
      "name": "Biliary Tract",
      "clinicalTrialKeywords": "biliary tract",
      "dedicatedColor": "Green",
      "shortName": "BILIARY_TRACT",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "ustad",
      "name": "Undifferentiated Stomach Adenocarcinoma",
      "clinicalTrialKeywords": "undifferentiated stomach adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "USTAD",
      "parent": "egc"
    },
    {
      "typeOfCancerId": "uccc",
      "name": "Uterine Clear Cell Carcinoma",
      "clinicalTrialKeywords": "uterine clear cell carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UCCC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "breast",
      "name": "Breast",
      "clinicalTrialKeywords": "breast",
      "dedicatedColor": "HotPink",
      "shortName": "BREAST",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "ucca",
      "name": "Choriocarcinoma",
      "clinicalTrialKeywords": "choriocarcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UCCA",
      "parent": "gtd"
    },
    {
      "typeOfCancerId": "ansc",
      "name": "Anal Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "anal squamous cell carcinoma",
      "dedicatedColor": "SaddleBrown",
      "shortName": "ANSC",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "hccihch",
      "name": "Hepatocellular Carcinoma plus Intrahepatic Cholangiocarcinoma",
      "clinicalTrialKeywords": "hepatocellular carcinoma plus intrahepatic cholangiocarcinoma",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "HCCIHCH",
      "parent": "liver"
    },
    {
      "typeOfCancerId": "sbmov",
      "name": "Serous Borderline Ovarian Tumor, Micropapillary",
      "clinicalTrialKeywords": "serous borderline ovarian tumor, micropapillary",
      "dedicatedColor": "LightBlue",
      "shortName": "SBMOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "lihb",
      "name": "Hepatoblastoma",
      "clinicalTrialKeywords": "hepatoblastoma",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "LIHB",
      "parent": "liver"
    },
    {
      "typeOfCancerId": "acrm",
      "name": "Acral Melanoma",
      "clinicalTrialKeywords": "acral melanoma",
      "dedicatedColor": "Black",
      "shortName": "ACRM",
      "parent": "mel"
    },
    {
      "typeOfCancerId": "blad",
      "name": "Bladder Adenocarcinoma",
      "clinicalTrialKeywords": "bladder adenocarcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "BLAD",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "ogct",
      "name": "Ovarian Germ Cell Tumor",
      "clinicalTrialKeywords": "ovarian germ cell tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "OGCT",
      "parent": "ovary"
    },
    {
      "typeOfCancerId": "istad",
      "name": "Intestinal Type Stomach Adenocarcinoma",
      "clinicalTrialKeywords": "intestinal type stomach adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "ISTAD",
      "parent": "stad"
    },
    {
      "typeOfCancerId": "gist",
      "name": "Gastrointestinal Stromal Tumor",
      "clinicalTrialKeywords": "gastrointestinal stromal tumor",
      "dedicatedColor": "LightYellow",
      "shortName": "GIST",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "df",
      "name": "Dermatofibroma",
      "clinicalTrialKeywords": "dermatofibroma",
      "dedicatedColor": "Black",
      "shortName": "DF",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "ilc",
      "name": "Breast Invasive Lobular Carcinoma",
      "clinicalTrialKeywords": "breast invasive lobular carcinoma",
      "dedicatedColor": "HotPink",
      "shortName": "ILC",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "dlbcl",
      "name": "Diffuse Large B-Cell Lymphoma",
      "clinicalTrialKeywords": "diffuse large b-cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "DLBCL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "poro",
      "name": "Poroma/Acrospiroma",
      "clinicalTrialKeywords": "poroma/acrospiroma",
      "dedicatedColor": "Black",
      "shortName": "PORO",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "umec",
      "name": "Uterine Mixed Endometrial Carcinoma",
      "clinicalTrialKeywords": "uterine mixed endometrial carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UMEC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "gctb",
      "name": "Giant Cell Tumor of Bone",
      "clinicalTrialKeywords": "giant cell tumor of bone",
      "dedicatedColor": "White",
      "shortName": "GCTB",
      "parent": "bone"
    },
    {
      "typeOfCancerId": "stsc",
      "name": "Small Cell Carcinoma of the Stomach",
      "clinicalTrialKeywords": "small cell carcinoma of the stomach",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "STSC",
      "parent": "egc"
    },
    {
      "typeOfCancerId": "osaca",
      "name": "Salivary Carcinoma, Other",
      "clinicalTrialKeywords": "salivary carcinoma, other",
      "dedicatedColor": "DarkRed",
      "shortName": "OSACA",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "mrls",
      "name": "Myxoid/Round-Cell Liposarcoma",
      "clinicalTrialKeywords": "myxoid/round-cell liposarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "MRLS",
      "parent": "lipo"
    },
    {
      "typeOfCancerId": "gej",
      "name": "Adenocarcinoma of the Gastroesophageal Junction",
      "clinicalTrialKeywords": "adenocarcinoma of the gastroesophageal junction",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "GEJ",
      "parent": "egc"
    },
    {
      "typeOfCancerId": "imt",
      "name": "Inflammatory Myofibroblastic Tumor",
      "clinicalTrialKeywords": "inflammatory myofibroblastic tumor",
      "dedicatedColor": "LightYellow",
      "shortName": "IMT",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "ebov",
      "name": "Endometrioid Borderlin Ovarian Tumor",
      "clinicalTrialKeywords": "endometrioid borderlin ovarian tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "EBOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "nsgct",
      "name": "Non-Seminomatous Germ Cell Tumor",
      "clinicalTrialKeywords": "non-seminomatous germ cell tumor",
      "dedicatedColor": "Red",
      "shortName": "NSGCT",
      "parent": "testis"
    },
    {
      "typeOfCancerId": "esmm",
      "name": "Mucosal Melanoma of the Esophagus",
      "clinicalTrialKeywords": "mucosal melanoma of the esophagus",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "ESMM",
      "parent": "stomach"
    },
    {
      "typeOfCancerId": "updc",
      "name": "Poorly Differentiated Carcinoma of the Uterus",
      "clinicalTrialKeywords": "poorly differentiated carcinoma of the uterus",
      "dedicatedColor": "PeachPuff",
      "shortName": "UPDC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "es",
      "name": "Ewing Sarcoma",
      "clinicalTrialKeywords": "ewing sarcoma",
      "dedicatedColor": "White",
      "shortName": "ES",
      "parent": "bone"
    },
    {
      "typeOfCancerId": "nsclcpd",
      "name": "Poorly Differentiated Non-Small Cell Lung Cancer",
      "clinicalTrialKeywords": "poorly differentiated non-small cell lung cancer",
      "dedicatedColor": "Gainsboro",
      "shortName": "NSCLCPD",
      "parent": "nsclc"
    },
    {
      "typeOfCancerId": "thyc",
      "name": "Thymic Carcinoma",
      "clinicalTrialKeywords": "thymic carcinoma",
      "dedicatedColor": "Purple",
      "shortName": "THYC",
      "parent": "tet"
    },
    {
      "typeOfCancerId": "osos",
      "name": "Osteoblastic Osteosarcoma",
      "clinicalTrialKeywords": "osteoblastic osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "OSOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "limnet",
      "name": "Malignant Nonepithelial Tumor of the Liver",
      "clinicalTrialKeywords": "malignant nonepithelial tumor of the liver",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "LIMNET",
      "parent": "liver"
    },
    {
      "typeOfCancerId": "gb",
      "name": "Glioblastoma",
      "clinicalTrialKeywords": "glioblastoma",
      "dedicatedColor": "Gray",
      "shortName": "GB",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "mlym",
      "name": "Malignant Lymphoma",
      "clinicalTrialKeywords": "malignant lymphoma",
      "dedicatedColor": "Gray",
      "shortName": "MLYM",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "oec",
      "name": "Embryonal Carcinoma",
      "clinicalTrialKeywords": "embryonal carcinoma",
      "dedicatedColor": "LightBlue",
      "shortName": "OEC",
      "parent": "ogct"
    },
    {
      "typeOfCancerId": "brain",
      "name": "CNS/Brain",
      "clinicalTrialKeywords": "cns/brain",
      "dedicatedColor": "Gray",
      "shortName": "BRAIN",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "acpg",
      "name": "Craniopharyngioma, Adamantinomatous Type",
      "clinicalTrialKeywords": "craniopharyngioma, adamantinomatous type",
      "dedicatedColor": "Gray",
      "shortName": "ACPG",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "gsarc",
      "name": "Gliosarcoma",
      "clinicalTrialKeywords": "gliosarcoma",
      "dedicatedColor": "Gray",
      "shortName": "GSARC",
      "parent": "gb"
    },
    {
      "typeOfCancerId": "cevg",
      "name": "Villoglandular Carcinoma",
      "clinicalTrialKeywords": "villoglandular carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CEVG",
      "parent": "cead"
    },
    {
      "typeOfCancerId": "fl",
      "name": "Follicular Lymphoma",
      "clinicalTrialKeywords": "follicular lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "FL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "hgnet",
      "name": "High-Grade Neuroepithelial Tumor",
      "clinicalTrialKeywords": "high-grade neuroepithelial tumor",
      "dedicatedColor": "Gray",
      "shortName": "HGNET",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "tnkl",
      "name": "T-Cell and Natural Killer Lymphoma",
      "clinicalTrialKeywords": "t-cell and natural killer lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "TNKL",
      "parent": "nhl"
    },
    {
      "typeOfCancerId": "sccnos",
      "name": "Squamous Cell Carcinoma, NOS",
      "clinicalTrialKeywords": "squamous cell carcinoma, nos",
      "dedicatedColor": "Black",
      "shortName": "SCCNOS",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "cup",
      "name": "Cancer of Unknown Primary",
      "clinicalTrialKeywords": "cancer of unknown primary",
      "dedicatedColor": "Black",
      "shortName": "CUP",
      "parent": "other"
    },
    {
      "typeOfCancerId": "ousarc",
      "name": "Uterine Sarcoma, Other",
      "clinicalTrialKeywords": "uterine sarcoma, other",
      "dedicatedColor": "PeachPuff",
      "shortName": "OUSARC",
      "parent": "usarc"
    },
    {
      "typeOfCancerId": "phc",
      "name": "Pheochromocytoma",
      "clinicalTrialKeywords": "pheochromocytoma",
      "dedicatedColor": "Purple",
      "shortName": "PHC",
      "parent": "adrenal_gland"
    },
    {
      "typeOfCancerId": "prscc",
      "name": "Prostate Small Cell Carcinoma",
      "clinicalTrialKeywords": "prostate small cell carcinoma",
      "dedicatedColor": "Cyan",
      "shortName": "PRSCC",
      "parent": "prostate"
    },
    {
      "typeOfCancerId": "atm",
      "name": "Atypical Meningioma",
      "clinicalTrialKeywords": "atypical meningioma",
      "dedicatedColor": "Gray",
      "shortName": "ATM",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "acpp",
      "name": "Atypical Choroid Plexus Papilloma",
      "clinicalTrialKeywords": "atypical choroid plexus papilloma",
      "dedicatedColor": "Gray",
      "shortName": "ACPP",
      "parent": "cpt"
    },
    {
      "typeOfCancerId": "hgnec",
      "name": "High-Grade Neuroendocrine Carcinoma of the Colon and Rectum",
      "clinicalTrialKeywords": "high-grade neuroendocrine carcinoma of the colon and rectum",
      "dedicatedColor": "SaddleBrown",
      "shortName": "HGNEC",
      "parent": "ginet"
    },
    {
      "typeOfCancerId": "odg",
      "name": "Oligodendroglioma",
      "clinicalTrialKeywords": "oligodendroglioma",
      "dedicatedColor": "Gray",
      "shortName": "ODG",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "ogbl",
      "name": "Gonadoblastoma",
      "clinicalTrialKeywords": "gonadoblastoma",
      "dedicatedColor": "LightBlue",
      "shortName": "OGBL",
      "parent": "scst"
    },
    {
      "typeOfCancerId": "phm",
      "name": "Partial Hydatidiform Mole",
      "clinicalTrialKeywords": "partial hydatidiform mole",
      "dedicatedColor": "PeachPuff",
      "shortName": "PHM",
      "parent": "mp"
    },
    {
      "typeOfCancerId": "mbov",
      "name": "Mucinous Borderline Ovarian Tumor",
      "clinicalTrialKeywords": "mucinous borderline ovarian tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "MBOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "sbov",
      "name": "Serous Borderline Ovarian Tumor",
      "clinicalTrialKeywords": "serous borderline ovarian tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "SBOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "paac",
      "name": "Acinar Cell Carcinoma of the Pancreas",
      "clinicalTrialKeywords": "acinar cell carcinoma of the pancreas",
      "dedicatedColor": "Purple",
      "shortName": "PAAC",
      "parent": "pancreas"
    },
    {
      "typeOfCancerId": "paad",
      "name": "Pancreatic Adenocarcinoma",
      "clinicalTrialKeywords": "pancreatic adenocarcinoma",
      "dedicatedColor": "Purple",
      "shortName": "PAAD",
      "parent": "pancreas"
    },
    {
      "typeOfCancerId": "pcgp",
      "name": "Craniopharyngioma, Papillary Type",
      "clinicalTrialKeywords": "craniopharyngioma, papillary type",
      "dedicatedColor": "Gray",
      "shortName": "PCGP",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "pecoma",
      "name": "Perivascular Epithelioid Cell Tumor",
      "clinicalTrialKeywords": "perivascular epithelioid cell tumor",
      "dedicatedColor": "LightYellow",
      "shortName": "PECOMA",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "gnbl",
      "name": "Ganglioneuroblastoma",
      "clinicalTrialKeywords": "ganglioneuroblastoma",
      "dedicatedColor": "Gray",
      "shortName": "GNBL",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "myf",
      "name": "Myelofibrosis/Osteomyelofibrosis",
      "clinicalTrialKeywords": "myelofibrosis/osteomyelofibrosis",
      "dedicatedColor": "LightSalmon",
      "shortName": "MYF",
      "parent": "mpn"
    },
    {
      "typeOfCancerId": "peos",
      "name": "Periosteal Osteosarcoma",
      "clinicalTrialKeywords": "periosteal osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "PEOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "cervix",
      "name": "Cervix",
      "clinicalTrialKeywords": "cervix",
      "dedicatedColor": "Teal",
      "shortName": "CERVIX",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "ovary",
      "name": "Ovary",
      "clinicalTrialKeywords": "ovary",
      "dedicatedColor": "LightBlue",
      "shortName": "OVARY",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "ihm",
      "name": "Invasive Hydatidiform Mole",
      "clinicalTrialKeywords": "invasive hydatidiform mole",
      "dedicatedColor": "PeachPuff",
      "shortName": "IHM",
      "parent": "mp"
    },
    {
      "typeOfCancerId": "c0036920",
      "name": "C0036920",
      "clinicalTrialKeywords": "c0036920",
      "dedicatedColor": "LimeGreen",
      "shortName": "C0036920",
      "parent": "c3366"
    },
    {
      "typeOfCancerId": "hnmucm",
      "name": "Head and Neck Mucosal Melanoma",
      "clinicalTrialKeywords": "head and neck mucosal melanoma",
      "dedicatedColor": "DarkRed",
      "shortName": "HNMUCM",
      "parent": "head_neck"
    },
    {
      "typeOfCancerId": "pptid",
      "name": "Pineal Parenchymal Tumor of Intermediate Differentiation",
      "clinicalTrialKeywords": "pineal parenchymal tumor of intermediate differentiation",
      "dedicatedColor": "Gray",
      "shortName": "PPTID",
      "parent": "pint"
    },
    {
      "typeOfCancerId": "mixed",
      "name": "Mixed Cancer Types",
      "clinicalTrialKeywords": "mixed cancer types",
      "dedicatedColor": "Black",
      "shortName": "MIXED",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "clnc",
      "name": "Cerebellar Liponeurocytoma",
      "clinicalTrialKeywords": "cerebellar liponeurocytoma",
      "dedicatedColor": "Gray",
      "shortName": "CLNC",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "ampulla_of_vater",
      "name": "Ampulla of Vater",
      "clinicalTrialKeywords": "ampulla of vater",
      "dedicatedColor": "Purple",
      "shortName": "AMPULLA_OF_VATER",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "upecoma",
      "name": "Uterine Perivascular Epithelioid Cell Tumor",
      "clinicalTrialKeywords": "uterine perivascular epithelioid cell tumor",
      "dedicatedColor": "PeachPuff",
      "shortName": "UPECOMA",
      "parent": "usarc"
    },
    {
      "typeOfCancerId": "mzl",
      "name": "Marginal Zone Lymphoma",
      "clinicalTrialKeywords": "marginal zone lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "MZL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "plbmeso",
      "name": "Pleural Mesothelioma, Biphasic Type",
      "clinicalTrialKeywords": "pleural mesothelioma, biphasic type",
      "dedicatedColor": "Blue",
      "shortName": "PLBMESO",
      "parent": "plmeso"
    },
    {
      "typeOfCancerId": "ucec",
      "name": "Endometrial Carcinoma",
      "clinicalTrialKeywords": "endometrial carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UCEC",
      "parent": "uterus"
    },
    {
      "typeOfCancerId": "pma",
      "name": "Pilomyxoid Astrocytoma",
      "clinicalTrialKeywords": "pilomyxoid astrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "PMA",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "thym",
      "name": "Thymoma",
      "clinicalTrialKeywords": "thymoma",
      "dedicatedColor": "Purple",
      "shortName": "THYM",
      "parent": "tet"
    },
    {
      "typeOfCancerId": "rms",
      "name": "Rhabdomyosarcoma",
      "clinicalTrialKeywords": "rhabdomyosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "RMS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "icemu",
      "name": "Intestinal Type Mucinous Carcinoma",
      "clinicalTrialKeywords": "intestinal type mucinous carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "ICEMU",
      "parent": "cemu"
    },
    {
      "typeOfCancerId": "fios",
      "name": "Fibroblastic Osteosarcoma",
      "clinicalTrialKeywords": "fibroblastic osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "FIOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "liver",
      "name": "Liver",
      "clinicalTrialKeywords": "liver",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "LIVER",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "aluca",
      "name": "Atypical Lung Carcinoid",
      "clinicalTrialKeywords": "atypical lung carcinoid",
      "dedicatedColor": "Gainsboro",
      "shortName": "ALUCA",
      "parent": "lnet"
    },
    {
      "typeOfCancerId": "dstad",
      "name": "Diffuse Type Stomach Adenocarcinoma",
      "clinicalTrialKeywords": "diffuse type stomach adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "DSTAD",
      "parent": "stad"
    },
    {
      "typeOfCancerId": "uscc",
      "name": "Urethral Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "urethral squamous cell carcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "USCC",
      "parent": "uca"
    },
    {
      "typeOfCancerId": "lcis",
      "name": "Breast Lobular Carcinoma In Situ",
      "clinicalTrialKeywords": "breast lobular carcinoma in situ",
      "dedicatedColor": "HotPink",
      "shortName": "LCIS",
      "parent": "breast"
    },
    {
      "typeOfCancerId": "omgct",
      "name": "Mixed Germ Cell Tumor",
      "clinicalTrialKeywords": "mixed germ cell tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "OMGCT",
      "parent": "ogct"
    },
    {
      "typeOfCancerId": "ccbov",
      "name": "Clear Cell Borderline Ovarian Tumor",
      "clinicalTrialKeywords": "clear cell borderline ovarian tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "CCBOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "scsrms",
      "name": "Spindle Cell/Sclerosing Rhabdomyosarcoma",
      "clinicalTrialKeywords": "spindle cell/sclerosing rhabdomyosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "SCSRMS",
      "parent": "rms"
    },
    {
      "typeOfCancerId": "adpa",
      "name": "Aggressive Digital Papillary Adenocarcinoma",
      "clinicalTrialKeywords": "aggressive digital papillary adenocarcinoma",
      "dedicatedColor": "Black",
      "shortName": "ADPA",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "bl",
      "name": "Burkitt Lymphoma",
      "clinicalTrialKeywords": "burkitt lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "BL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "amol",
      "name": "Acute Monocytic Leukemia",
      "clinicalTrialKeywords": "acute monocytic leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "AMOL",
      "parent": "leuk"
    },
    {
      "typeOfCancerId": "snsc",
      "name": "Sinonasal Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "sinonasal squamous cell carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "SNSC",
      "parent": "hnsc"
    },
    {
      "typeOfCancerId": "panet",
      "name": "Pancreatic Neuroendocrine Tumor",
      "clinicalTrialKeywords": "pancreatic neuroendocrine tumor",
      "dedicatedColor": "Purple",
      "shortName": "PANET",
      "parent": "pancreas"
    },
    {
      "typeOfCancerId": "apad",
      "name": "Appendiceal Adenocarcinoma",
      "clinicalTrialKeywords": "appendiceal adenocarcinoma",
      "dedicatedColor": "SaddleBrown",
      "shortName": "APAD",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "spir",
      "name": "Spiroma/Spiradenoma",
      "clinicalTrialKeywords": "spiroma/spiradenoma",
      "dedicatedColor": "Black",
      "shortName": "SPIR",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "selt",
      "name": "Sellar Tumor",
      "clinicalTrialKeywords": "sellar tumor",
      "dedicatedColor": "Gray",
      "shortName": "SELT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "masc",
      "name": "Metaplastic Adenosquamous Carcinoma",
      "clinicalTrialKeywords": "metaplastic adenosquamous carcinoma",
      "dedicatedColor": "HotPink",
      "shortName": "MASC",
      "parent": "embc"
    },
    {
      "typeOfCancerId": "ddchs",
      "name": "Dedifferentiated Chondrosarcoma",
      "clinicalTrialKeywords": "dedifferentiated chondrosarcoma",
      "dedicatedColor": "White",
      "shortName": "DDCHS",
      "parent": "chs"
    },
    {
      "typeOfCancerId": "cesc",
      "name": "Cervical Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "cervical squamous cell carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CESC",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "brca",
      "name": "Invasive Breast Carcinoma",
      "clinicalTrialKeywords": "invasive breast carcinoma",
      "dedicatedColor": "HotPink",
      "shortName": "BRCA",
      "parent": "breast"
    },
    {
      "typeOfCancerId": "aastr",
      "name": "Anaplastic Astrocytoma",
      "clinicalTrialKeywords": "anaplastic astrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "AASTR",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "cese",
      "name": "Cervical Serous Carcinoma",
      "clinicalTrialKeywords": "cervical serous carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CESE",
      "parent": "cead"
    },
    {
      "typeOfCancerId": "uddc",
      "name": "Uterine Dedifferentiated Carcinoma",
      "clinicalTrialKeywords": "uterine dedifferentiated carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UDDC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "mgct",
      "name": "Mixed Germ Cell Tumor",
      "clinicalTrialKeywords": "mixed germ cell tumor",
      "dedicatedColor": "Red",
      "shortName": "MGCT",
      "parent": "nsgct"
    },
    {
      "typeOfCancerId": "myec",
      "name": "Myoepithelial Carcinoma",
      "clinicalTrialKeywords": "myoepithelial carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "MYEC",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "umlms",
      "name": "Uterine Myxoid Leiomyosarcoma",
      "clinicalTrialKeywords": "uterine myxoid leiomyosarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UMLMS",
      "parent": "usmt"
    },
    {
      "typeOfCancerId": "limegreen",
      "name": "LimeGreen",
      "clinicalTrialKeywords": "limegreen",
      "dedicatedColor": "LimeGreen",
      "shortName": "LimeGreen",
      "parent": "non-hodgkin lymphoma"
    },
    {
      "typeOfCancerId": "atrt",
      "name": "Atypical Teratoid/Rhabdoid Tumor",
      "clinicalTrialKeywords": "atypical teratoid/rhabdoid tumor",
      "dedicatedColor": "Gray",
      "shortName": "ATRT",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "cm",
      "name": "Conjunctival Melanoma",
      "clinicalTrialKeywords": "conjunctival melanoma",
      "dedicatedColor": "Green",
      "shortName": "CM",
      "parent": "om"
    },
    {
      "typeOfCancerId": "eye",
      "name": "Eye",
      "clinicalTrialKeywords": "eye",
      "dedicatedColor": "Green",
      "shortName": "EYE",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "peritoneum",
      "name": "Peritoneum",
      "clinicalTrialKeywords": "peritoneum",
      "dedicatedColor": "Green",
      "shortName": "PERITONEUM",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "mpnst",
      "name": "Malignant Peripheral Nerve Sheath Tumor",
      "clinicalTrialKeywords": "malignant peripheral nerve sheath tumor",
      "dedicatedColor": "Gray",
      "shortName": "MPNST",
      "parent": "nst"
    },
    {
      "typeOfCancerId": "lclc",
      "name": "Large Cell Lung Carcinoma",
      "clinicalTrialKeywords": "large cell lung carcinoma",
      "dedicatedColor": "Gainsboro",
      "shortName": "LCLC",
      "parent": "nsclc"
    },
    {
      "typeOfCancerId": "asps",
      "name": "Alveolar Soft Part Sarcoma",
      "clinicalTrialKeywords": "alveolar soft part sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "ASPS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "idc",
      "name": "Breast Invasive Ductal Carcinoma",
      "clinicalTrialKeywords": "breast invasive ductal carcinoma",
      "dedicatedColor": "HotPink",
      "shortName": "IDC",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "mft",
      "name": "Malignant Fibrothecoma",
      "clinicalTrialKeywords": "malignant fibrothecoma",
      "dedicatedColor": "LightBlue",
      "shortName": "MFT",
      "parent": "scst"
    },
    {
      "typeOfCancerId": "cabc",
      "name": "Cervical Adenoid Basal Carcinoma",
      "clinicalTrialKeywords": "cervical adenoid basal carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CABC",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "mfs",
      "name": "Myxofibrosarcoma",
      "clinicalTrialKeywords": "myxofibrosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "MFS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "mschw",
      "name": "Melanotic Schwannoma",
      "clinicalTrialKeywords": "melanotic schwannoma",
      "dedicatedColor": "Gray",
      "shortName": "MSCHW",
      "parent": "schw"
    },
    {
      "typeOfCancerId": "slct",
      "name": "Sertoli-Leydig Cell Tumor",
      "clinicalTrialKeywords": "sertoli-leydig cell tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "SLCT",
      "parent": "scst"
    },
    {
      "typeOfCancerId": "oovc",
      "name": "Ovarian Cancer, Other",
      "clinicalTrialKeywords": "ovarian cancer, other",
      "dedicatedColor": "LightBlue",
      "shortName": "OOVC",
      "parent": "ovary"
    },
    {
      "typeOfCancerId": "nccrcc",
      "name": "Renal Non-Clear Cell Carcinoma",
      "clinicalTrialKeywords": "renal non-clear cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "NCCRCC",
      "parent": "rcc"
    },
    {
      "typeOfCancerId": "dcis",
      "name": "Breast Ductal Carcinoma In Situ",
      "clinicalTrialKeywords": "breast ductal carcinoma in situ",
      "dedicatedColor": "HotPink",
      "shortName": "DCIS",
      "parent": "breast"
    },
    {
      "typeOfCancerId": "cscc",
      "name": "Cutaneous Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "cutaneous squamous cell carcinoma",
      "dedicatedColor": "Black",
      "shortName": "CSCC",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "mfh",
      "name": "Undifferentiated Pleomorphic Sarcoma/Malignant Fibrous Histiocytoma/High-Grade Spindle Cell Sarcoma",
      "clinicalTrialKeywords": "undifferentiated pleomorphic sarcoma/malignant fibrous histiocytoma/high-grade spindle cell sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "MFH",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "mf",
      "name": "Mycosis Fungoides",
      "clinicalTrialKeywords": "mycosis fungoides",
      "dedicatedColor": "LimeGreen",
      "shortName": "MF",
      "parent": "ctcl"
    },
    {
      "typeOfCancerId": "c4340",
      "name": "C4340",
      "clinicalTrialKeywords": "c4340",
      "dedicatedColor": "LimeGreen",
      "shortName": "C4340",
      "parent": "limegreen"
    },
    {
      "typeOfCancerId": "past",
      "name": "Pilocytic Astrocytoma",
      "clinicalTrialKeywords": "pilocytic astrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "PAST",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "oyst",
      "name": "Yolk Sac Tumor",
      "clinicalTrialKeywords": "yolk sac tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "OYST",
      "parent": "ogct"
    },
    {
      "typeOfCancerId": "blsc",
      "name": "Bladder Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "bladder squamous cell carcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "BLSC",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "cacc",
      "name": "Cervical Adenoid Cystic Carcinoma",
      "clinicalTrialKeywords": "cervical adenoid cystic carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CACC",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "thap",
      "name": "Anaplastic Thyroid Cancer",
      "clinicalTrialKeywords": "anaplastic thyroid cancer",
      "dedicatedColor": "Teal",
      "shortName": "THAP",
      "parent": "thyroid"
    },
    {
      "typeOfCancerId": "oimt",
      "name": "Immature Teratoma",
      "clinicalTrialKeywords": "immature teratoma",
      "dedicatedColor": "LightBlue",
      "shortName": "OIMT",
      "parent": "ogct"
    },
    {
      "typeOfCancerId": "mm",
      "name": "Multiple Myeloma",
      "clinicalTrialKeywords": "multiple myeloma",
      "dedicatedColor": "LightSalmon",
      "shortName": "MM",
      "parent": "blood"
    },
    {
      "typeOfCancerId": "vyst",
      "name": "Yolk Sac Tumor",
      "clinicalTrialKeywords": "yolk sac tumor",
      "dedicatedColor": "Black",
      "shortName": "VYST",
      "parent": "vgct"
    },
    {
      "typeOfCancerId": "mp",
      "name": "Molar Pregnancy",
      "clinicalTrialKeywords": "molar pregnancy",
      "dedicatedColor": "PeachPuff",
      "shortName": "MP",
      "parent": "gtd"
    },
    {
      "typeOfCancerId": "chbl",
      "name": "Chondroblastoma",
      "clinicalTrialKeywords": "chondroblastoma",
      "dedicatedColor": "White",
      "shortName": "CHBL",
      "parent": "bone"
    },
    {
      "typeOfCancerId": "epis",
      "name": "Epithelioid Sarcoma",
      "clinicalTrialKeywords": "epithelioid sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "EPIS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "mt",
      "name": "Malignant Tumor",
      "clinicalTrialKeywords": "malignant tumor",
      "dedicatedColor": "Gray",
      "shortName": "MT",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "prcc",
      "name": "Papillary Renal Cell Carcinoma",
      "clinicalTrialKeywords": "papillary renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "PRCC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "rlclc",
      "name": "Large Cell Lung Carcinoma With Rhabdoid Phenotype",
      "clinicalTrialKeywords": "large cell lung carcinoma with rhabdoid phenotype",
      "dedicatedColor": "Gainsboro",
      "shortName": "RLCLC",
      "parent": "lclc"
    },
    {
      "typeOfCancerId": "pscc",
      "name": "Penile Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "penile squamous cell carcinoma",
      "dedicatedColor": "Blue",
      "shortName": "PSCC",
      "parent": "penis"
    },
    {
      "typeOfCancerId": "lgfms",
      "name": "Low-Grade Fibromyxoid Sarcoma",
      "clinicalTrialKeywords": "low-grade fibromyxoid sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "LGFMS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "ints",
      "name": "Intimal Sarcoma",
      "clinicalTrialKeywords": "intimal sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "INTS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "cchdm",
      "name": "Conventional Type Chordoma",
      "clinicalTrialKeywords": "conventional type chordoma",
      "dedicatedColor": "White",
      "shortName": "CCHDM",
      "parent": "chdm"
    },
    {
      "typeOfCancerId": "blood",
      "name": "Blood",
      "clinicalTrialKeywords": "blood",
      "dedicatedColor": "LightSalmon",
      "shortName": "BLOOD",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "plrms",
      "name": "Pleomorphic Rhabdomyosarcoma",
      "clinicalTrialKeywords": "pleomorphic rhabdomyosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "PLRMS",
      "parent": "rms"
    },
    {
      "typeOfCancerId": "mds",
      "name": "Myelodysplasia",
      "clinicalTrialKeywords": "myelodysplasia",
      "dedicatedColor": "LightSalmon",
      "shortName": "MDS",
      "parent": "blood"
    },
    {
      "typeOfCancerId": "mmbl",
      "name": "Melanotic Medulloblastoma",
      "clinicalTrialKeywords": "melanotic medulloblastoma",
      "dedicatedColor": "Gray",
      "shortName": "MMBL",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "nhl",
      "name": "Non-Hodgkin Lymphoma",
      "clinicalTrialKeywords": "non-hodgkin lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "NHL",
      "parent": "lymph"
    },
    {
      "typeOfCancerId": "hgess",
      "name": "High-Grade Endometrial Stromal Sarcoma",
      "clinicalTrialKeywords": "high-grade endometrial stromal sarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "HGESS",
      "parent": "ess"
    },
    {
      "typeOfCancerId": "thymus",
      "name": "Thymus",
      "clinicalTrialKeywords": "thymus",
      "dedicatedColor": "Purple",
      "shortName": "THYMUS",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "mmbc",
      "name": "Mixed Type Metaplastic Breast Cancer",
      "clinicalTrialKeywords": "mixed type metaplastic breast cancer",
      "dedicatedColor": "HotPink",
      "shortName": "MMBC",
      "parent": "mbc"
    },
    {
      "typeOfCancerId": "om",
      "name": "Ocular Melanoma",
      "clinicalTrialKeywords": "ocular melanoma",
      "dedicatedColor": "Green",
      "shortName": "OM",
      "parent": "eye"
    },
    {
      "typeOfCancerId": "uec",
      "name": "Uterine Endometrioid Carcinoma",
      "clinicalTrialKeywords": "uterine endometrioid carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UEC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "cclc",
      "name": "Clear Cell Carcinoma of the Lung",
      "clinicalTrialKeywords": "clear cell carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "CCLC",
      "parent": "lclc"
    },
    {
      "typeOfCancerId": "liad",
      "name": "Hepatocellular Adenoma",
      "clinicalTrialKeywords": "hepatocellular adenoma",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "LIAD",
      "parent": "liver"
    },
    {
      "typeOfCancerId": "etantr",
      "name": "Embryonal Tumor with Abundant Neuropil and True Rosettes",
      "clinicalTrialKeywords": "embryonal tumor with abundant neuropil and true rosettes",
      "dedicatedColor": "Gray",
      "shortName": "ETANTR",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "egc",
      "name": "Esophagogastric Adenocarcinoma",
      "clinicalTrialKeywords": "esophagogastric adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "EGC",
      "parent": "stomach"
    },
    {
      "typeOfCancerId": "encg",
      "name": "Encapsulated Glioma",
      "clinicalTrialKeywords": "encapsulated glioma",
      "dedicatedColor": "Gray",
      "shortName": "ENCG",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "lias",
      "name": "Liver Angiosarcoma",
      "clinicalTrialKeywords": "liver angiosarcoma",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "LIAS",
      "parent": "liver"
    },
    {
      "typeOfCancerId": "sgttl",
      "name": "Salivary Gland–Type Tumor of the Lung",
      "clinicalTrialKeywords": "salivary gland–type tumor of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "SGTTL",
      "parent": "nsclc"
    },
    {
      "typeOfCancerId": "ucp",
      "name": "Undifferentiated Carcinoma of the Pancreas",
      "clinicalTrialKeywords": "undifferentiated carcinoma of the pancreas",
      "dedicatedColor": "Purple",
      "shortName": "UCP",
      "parent": "pancreas"
    },
    {
      "typeOfCancerId": "fibs",
      "name": "Fibrosarcoma",
      "clinicalTrialKeywords": "fibrosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "FIBS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "prostate",
      "name": "Prostate",
      "clinicalTrialKeywords": "prostate",
      "dedicatedColor": "Cyan",
      "shortName": "PROSTATE",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "ucu",
      "name": "Urethral Urothelial Carcinoma",
      "clinicalTrialKeywords": "urethral urothelial carcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "UCU",
      "parent": "uca"
    },
    {
      "typeOfCancerId": "c3366",
      "name": "C3366",
      "clinicalTrialKeywords": "c3366",
      "dedicatedColor": "LimeGreen",
      "shortName": "C3366",
      "parent": "limegreen"
    },
    {
      "typeOfCancerId": "ucs",
      "name": "Uterine Carcinosarcoma/Uterine Malignant Mixed Mullerian Tumor",
      "clinicalTrialKeywords": "uterine carcinosarcoma/uterine malignant mixed mullerian tumor",
      "dedicatedColor": "PeachPuff",
      "shortName": "UCS",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "soft_tissue",
      "name": "Soft Tissue",
      "clinicalTrialKeywords": "soft tissue",
      "dedicatedColor": "LightYellow",
      "shortName": "SOFT_TISSUE",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "os",
      "name": "Osteosarcoma",
      "clinicalTrialKeywords": "osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "OS",
      "parent": "bone"
    },
    {
      "typeOfCancerId": "trcc",
      "name": "Translocation-Associated Renal Cell Carcinoma",
      "clinicalTrialKeywords": "translocation-associated renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "TRCC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "armm",
      "name": "Anorectal Mucosal Melanoma",
      "clinicalTrialKeywords": "anorectal mucosal melanoma",
      "dedicatedColor": "SaddleBrown",
      "shortName": "ARMM",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "vmgct",
      "name": "Mixed Germ Cell Tumor",
      "clinicalTrialKeywords": "mixed germ cell tumor",
      "dedicatedColor": "Black",
      "shortName": "VMGCT",
      "parent": "vgct"
    },
    {
      "typeOfCancerId": "arms",
      "name": "Alveolar Rhabdomyosarcoma",
      "clinicalTrialKeywords": "alveolar rhabdomyosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "ARMS",
      "parent": "rms"
    },
    {
      "typeOfCancerId": "empsgc",
      "name": "Endocrine Mucin Producing Sweat Gland Carcinoma",
      "clinicalTrialKeywords": "endocrine mucin producing sweat gland carcinoma",
      "dedicatedColor": "Black",
      "shortName": "EMPSGC",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "mel",
      "name": "Melanoma",
      "clinicalTrialKeywords": "melanoma",
      "dedicatedColor": "Black",
      "shortName": "MEL",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "rhm",
      "name": "Rhabdoid Meningioma",
      "clinicalTrialKeywords": "rhabdoid meningioma",
      "dedicatedColor": "Gray",
      "shortName": "RHM",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "lusc",
      "name": "Lung Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "lung squamous cell carcinoma",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUSC",
      "parent": "nsclc"
    },
    {
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma",
      "clinicalTrialKeywords": "prostate adenocarcinoma",
      "dedicatedColor": "Cyan",
      "shortName": "PRAD",
      "parent": "prostate"
    },
    {
      "typeOfCancerId": "pd",
      "name": "Paget Disease of the Nipple",
      "clinicalTrialKeywords": "paget disease of the nipple",
      "dedicatedColor": "HotPink",
      "shortName": "PD",
      "parent": "dcis"
    },
    {
      "typeOfCancerId": "coad",
      "name": "Colon Adenocarcinoma",
      "clinicalTrialKeywords": "colon adenocarcinoma",
      "dedicatedColor": "SaddleBrown",
      "shortName": "COAD",
      "parent": "coadread"
    },
    {
      "typeOfCancerId": "btbeov",
      "name": "Brenner Tumor, Benign",
      "clinicalTrialKeywords": "brenner tumor, benign",
      "dedicatedColor": "LightBlue",
      "shortName": "BTBEOV",
      "parent": "btov"
    },
    {
      "typeOfCancerId": "spcc",
      "name": "Spindle Cell Carcinoma of the Lung",
      "clinicalTrialKeywords": "spindle cell carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "SpCC",
      "parent": "nsclc"
    },
    {
      "typeOfCancerId": "leuk",
      "name": "Leukemia",
      "clinicalTrialKeywords": "leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "LEUK",
      "parent": "blood"
    },
    {
      "typeOfCancerId": "pleura",
      "name": "Pleura",
      "clinicalTrialKeywords": "pleura",
      "dedicatedColor": "Blue",
      "shortName": "PLEURA",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "nbl",
      "name": "Neuroblastoma",
      "clinicalTrialKeywords": "neuroblastoma",
      "dedicatedColor": "Gray",
      "shortName": "NBL",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "lgnet",
      "name": "Low-Grade Neuroepithelial Tumor",
      "clinicalTrialKeywords": "low-grade neuroepithelial tumor",
      "dedicatedColor": "Gray",
      "shortName": "LGNET",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "sdca",
      "name": "Salivary Duct Carcinoma",
      "clinicalTrialKeywords": "salivary duct carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "SDCA",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "imtl",
      "name": "Inflammatory Myofibroblastic Lung Tumor",
      "clinicalTrialKeywords": "inflammatory myofibroblastic lung tumor",
      "dedicatedColor": "Gainsboro",
      "shortName": "IMTL",
      "parent": "lung"
    },
    {
      "typeOfCancerId": "cegcc",
      "name": "Glassy Cell Carcinoma of the Cervix",
      "clinicalTrialKeywords": "glassy cell carcinoma of the cervix",
      "dedicatedColor": "Teal",
      "shortName": "CEGCC",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "ocs",
      "name": "Ovarian Carcinosarcoma/Malignant Mixed Mesodermal Tumor",
      "clinicalTrialKeywords": "ovarian carcinosarcoma/malignant mixed mesodermal tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "OCS",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "mbl",
      "name": "Medulloblastoma",
      "clinicalTrialKeywords": "medulloblastoma",
      "dedicatedColor": "Gray",
      "shortName": "MBL",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "csnos",
      "name": "Breast Invasive Carcinosarcoma, NOS",
      "clinicalTrialKeywords": "breast invasive carcinosarcoma, nos",
      "dedicatedColor": "HotPink",
      "shortName": "CSNOS",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "ctcl",
      "name": "Cutaneous T-Cell Lymphoma",
      "clinicalTrialKeywords": "cutaneous t-cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "CTCL",
      "parent": "tnkl"
    },
    {
      "typeOfCancerId": "hl",
      "name": "Hodgkin Lymphoma",
      "clinicalTrialKeywords": "hodgkin lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "HL",
      "parent": "lymph"
    },
    {
      "typeOfCancerId": "gmucm",
      "name": "Genitourinary Mucosal Melanoma",
      "clinicalTrialKeywords": "genitourinary mucosal melanoma",
      "dedicatedColor": "Black",
      "shortName": "GMUCM",
      "parent": "mel"
    },
    {
      "typeOfCancerId": "mbt",
      "name": "Miscellaneous Brain Tumor",
      "clinicalTrialKeywords": "miscellaneous brain tumor",
      "dedicatedColor": "Gray",
      "shortName": "MBT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "bgct",
      "name": "Germ Cell Tumor, Brain",
      "clinicalTrialKeywords": "germ cell tumor, brain",
      "dedicatedColor": "Gray",
      "shortName": "BGCT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "btbov",
      "name": "Brenner Tumor, Borderline",
      "clinicalTrialKeywords": "brenner tumor, borderline",
      "dedicatedColor": "LightBlue",
      "shortName": "BTBOV",
      "parent": "btov"
    },
    {
      "typeOfCancerId": "ehae",
      "name": "Epithelioid Hemangioendothelioma",
      "clinicalTrialKeywords": "epithelioid hemangioendothelioma",
      "dedicatedColor": "LightYellow",
      "shortName": "EHAE",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "imtb",
      "name": "Inflammatory Myofibroblastic Bladder Tumor",
      "clinicalTrialKeywords": "inflammatory myofibroblastic bladder tumor",
      "dedicatedColor": "Yellow",
      "shortName": "IMTB",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "ipmn",
      "name": "Intraductal Papillary Mucinous Neoplasm",
      "clinicalTrialKeywords": "intraductal papillary mucinous neoplasm",
      "dedicatedColor": "Purple",
      "shortName": "IPMN",
      "parent": "pact"
    },
    {
      "typeOfCancerId": "pbs",
      "name": "Breast Sarcoma",
      "clinicalTrialKeywords": "breast sarcoma",
      "dedicatedColor": "HotPink",
      "shortName": "PBS",
      "parent": "breast"
    },
    {
      "typeOfCancerId": "des",
      "name": "Desmoid/Aggressive Fibromatosis",
      "clinicalTrialKeywords": "desmoid/aggressive fibromatosis",
      "dedicatedColor": "LightYellow",
      "shortName": "DES",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "pbt",
      "name": "Primary Brain Tumor",
      "clinicalTrialKeywords": "primary brain tumor",
      "dedicatedColor": "Gray",
      "shortName": "PBT",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "mbc",
      "name": "Metaplastic Breast Cancer",
      "clinicalTrialKeywords": "metaplastic breast cancer",
      "dedicatedColor": "HotPink",
      "shortName": "MBC",
      "parent": "breast"
    },
    {
      "typeOfCancerId": "rcc",
      "name": "Renal Cell Carcinoma",
      "clinicalTrialKeywords": "renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "RCC",
      "parent": "kidney"
    },
    {
      "typeOfCancerId": "dsrct",
      "name": "Desmoplastic Small-Round-Cell Tumor",
      "clinicalTrialKeywords": "desmoplastic small-round-cell tumor",
      "dedicatedColor": "LightYellow",
      "shortName": "DSRCT",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "uca",
      "name": "Urethral Cancer",
      "clinicalTrialKeywords": "urethral cancer",
      "dedicatedColor": "Yellow",
      "shortName": "UCA",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "mcl",
      "name": "Mantle Cell Lymphoma",
      "clinicalTrialKeywords": "mantle cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "MCL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "epmt",
      "name": "Ependymomal Tumor",
      "clinicalTrialKeywords": "ependymomal tumor",
      "dedicatedColor": "Gray",
      "shortName": "EPMT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "embc",
      "name": "Epithelial Type Metaplastic Breast Cancer",
      "clinicalTrialKeywords": "epithelial type metaplastic breast cancer",
      "dedicatedColor": "HotPink",
      "shortName": "EMBC",
      "parent": "mbc"
    },
    {
      "typeOfCancerId": "uas",
      "name": "Uterine Adenosarcoma",
      "clinicalTrialKeywords": "uterine adenosarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UAS",
      "parent": "usarc"
    },
    {
      "typeOfCancerId": "pbl",
      "name": "Pineoblastoma",
      "clinicalTrialKeywords": "pineoblastoma",
      "dedicatedColor": "Gray",
      "shortName": "PBL",
      "parent": "pint"
    },
    {
      "typeOfCancerId": "mcs",
      "name": "Metaplastic Carcinosarcoma",
      "clinicalTrialKeywords": "metaplastic carcinosarcoma",
      "dedicatedColor": "HotPink",
      "shortName": "MCS",
      "parent": "mmbc"
    },
    {
      "typeOfCancerId": "ras",
      "name": "Radiation-Associated Sarcoma",
      "clinicalTrialKeywords": "radiation-associated sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "RAS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "mcn",
      "name": "Mucinous Cystic Neoplasm",
      "clinicalTrialKeywords": "mucinous cystic neoplasm",
      "dedicatedColor": "Purple",
      "shortName": "MCN",
      "parent": "pact"
    },
    {
      "typeOfCancerId": "seba",
      "name": "Sebaceous Carcinoma",
      "clinicalTrialKeywords": "sebaceous carcinoma",
      "dedicatedColor": "Black",
      "shortName": "SEBA",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "lch",
      "name": "Langerhans Cell Histiocytosis",
      "clinicalTrialKeywords": "langerhans cell histiocytosis",
      "dedicatedColor": "LightSalmon",
      "shortName": "LCH",
      "parent": "hist"
    },
    {
      "typeOfCancerId": "embt",
      "name": "Embryonal Tumor",
      "clinicalTrialKeywords": "embryonal tumor",
      "dedicatedColor": "Gray",
      "shortName": "EMBT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "ecad",
      "name": "Endocervical Adenocarcinoma",
      "clinicalTrialKeywords": "endocervical adenocarcinoma",
      "dedicatedColor": "Teal",
      "shortName": "ECAD",
      "parent": "cead"
    },
    {
      "typeOfCancerId": "rbl",
      "name": "Retinoblastoma",
      "clinicalTrialKeywords": "retinoblastoma",
      "dedicatedColor": "Green",
      "shortName": "RBL",
      "parent": "eye"
    },
    {
      "typeOfCancerId": "dmbl",
      "name": "Desmoplastic/Nodular Medulloblastoma",
      "clinicalTrialKeywords": "desmoplastic/nodular medulloblastoma",
      "dedicatedColor": "Gray",
      "shortName": "DMBL",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "plls",
      "name": "Pleomorphic Liposarcoma",
      "clinicalTrialKeywords": "pleomorphic liposarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "PLLS",
      "parent": "lipo"
    },
    {
      "typeOfCancerId": "mcc",
      "name": "Merkel Cell Carcinoma",
      "clinicalTrialKeywords": "merkel cell carcinoma",
      "dedicatedColor": "Black",
      "shortName": "MCC",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "c3246",
      "name": "C3246",
      "clinicalTrialKeywords": "c3246",
      "dedicatedColor": "LimeGreen",
      "shortName": "C3246",
      "parent": "limegreen"
    },
    {
      "typeOfCancerId": "erms",
      "name": "Embryonal Rhabdomyosarcoma",
      "clinicalTrialKeywords": "embryonal rhabdomyosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "ERMS",
      "parent": "rms"
    },
    {
      "typeOfCancerId": "ofmt",
      "name": "Ossifying Fibromyxoid Tumor",
      "clinicalTrialKeywords": "ossifying fibromyxoid tumor",
      "dedicatedColor": "LightYellow",
      "shortName": "OFMT",
      "parent": "myxo"
    },
    {
      "typeOfCancerId": "ccm",
      "name": "Clear cell Meningioma",
      "clinicalTrialKeywords": "clear cell meningioma",
      "dedicatedColor": "Gray",
      "shortName": "CCM",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "ehch",
      "name": "Extrahepatic Cholangiocarcinoma",
      "clinicalTrialKeywords": "extrahepatic cholangiocarcinoma",
      "dedicatedColor": "Green",
      "shortName": "EHCH",
      "parent": "chol"
    },
    {
      "typeOfCancerId": "gccap",
      "name": "Goblet Cell Carcinoid of the Appendix",
      "clinicalTrialKeywords": "goblet cell carcinoid of the appendix",
      "dedicatedColor": "SaddleBrown",
      "shortName": "GCCAP",
      "parent": "apad"
    },
    {
      "typeOfCancerId": "ldd",
      "name": "Dysplastic Gangliocytoma of the Cerebellum/Lhermitte-Duclos Disease",
      "clinicalTrialKeywords": "dysplastic gangliocytoma of the cerebellum/lhermitte-duclos disease",
      "dedicatedColor": "Gray",
      "shortName": "LDD",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "gbm",
      "name": "Glioblastoma Multiforme",
      "clinicalTrialKeywords": "glioblastoma multiforme",
      "dedicatedColor": "Gray",
      "shortName": "GBM",
      "parent": "gb"
    },
    {
      "typeOfCancerId": "ibc",
      "name": "Inflammatory Breast Cancer",
      "clinicalTrialKeywords": "inflammatory breast cancer",
      "dedicatedColor": "HotPink",
      "shortName": "IBC",
      "parent": "breast"
    },
    {
      "typeOfCancerId": "cce",
      "name": "Clear Cell Ependymoma",
      "clinicalTrialKeywords": "clear cell ependymoma",
      "dedicatedColor": "Gray",
      "shortName": "CCE",
      "parent": "epmt"
    },
    {
      "typeOfCancerId": "uad",
      "name": "Urethral Adenocarcinoma",
      "clinicalTrialKeywords": "urethral adenocarcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "UAD",
      "parent": "uca"
    },
    {
      "typeOfCancerId": "brame",
      "name": "Adenomyoepithelioma of the Breast",
      "clinicalTrialKeywords": "adenomyoepithelioma of the breast",
      "dedicatedColor": "HotPink",
      "shortName": "BRAME",
      "parent": "breast"
    },
    {
      "typeOfCancerId": "dcs",
      "name": "Dendritic Cell Sarcoma",
      "clinicalTrialKeywords": "dendritic cell sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "DCS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "gbc",
      "name": "Gallbladder Cancer",
      "clinicalTrialKeywords": "gallbladder cancer",
      "dedicatedColor": "Green",
      "shortName": "GBC",
      "parent": "biliary_tract"
    },
    {
      "typeOfCancerId": "scoah",
      "name": "Spindle Cell Oncocytoma of the Adenohypophysis",
      "clinicalTrialKeywords": "spindle cell oncocytoma of the adenohypophysis",
      "dedicatedColor": "Gray",
      "shortName": "SCOAH",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "ecd",
      "name": "Non-Langerhans Cell Histiocytosis/Erdheim-Chester Disease",
      "clinicalTrialKeywords": "non-langerhans cell histiocytosis/erdheim-chester disease",
      "dedicatedColor": "LightSalmon",
      "shortName": "ECD",
      "parent": "hist"
    },
    {
      "typeOfCancerId": "accc",
      "name": "Acinic Cell Carcinoma",
      "clinicalTrialKeywords": "acinic cell carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "ACCC",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "ccs",
      "name": "Clear Cell Sarcoma",
      "clinicalTrialKeywords": "clear cell sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "CCS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "necnos",
      "name": "Neuroendocrine Carcinoma, NOS",
      "clinicalTrialKeywords": "neuroendocrine carcinoma, nos",
      "dedicatedColor": "Black",
      "shortName": "NECNOS",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "outt",
      "name": "Other Uterine Tumor",
      "clinicalTrialKeywords": "other uterine tumor",
      "dedicatedColor": "PeachPuff",
      "shortName": "OUTT",
      "parent": "uterus"
    },
    {
      "typeOfCancerId": "thyroid",
      "name": "Thyroid",
      "clinicalTrialKeywords": "thyroid",
      "dedicatedColor": "Teal",
      "shortName": "THYROID",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "scgbm",
      "name": "Small Cell Glioblastoma",
      "clinicalTrialKeywords": "small cell glioblastoma",
      "dedicatedColor": "Gray",
      "shortName": "SCGBM",
      "parent": "gb"
    },
    {
      "typeOfCancerId": "rgnt",
      "name": "Rosette-forming Glioneuronal Tumor of the Fourth Ventricle",
      "clinicalTrialKeywords": "rosette-forming glioneuronal tumor of the fourth ventricle",
      "dedicatedColor": "Gray",
      "shortName": "RGNT",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "lung",
      "name": "Lung",
      "clinicalTrialKeywords": "lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUNG",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "gct",
      "name": "Granular Cell Tumor",
      "clinicalTrialKeywords": "granular cell tumor",
      "dedicatedColor": "Gray",
      "shortName": "GCT",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "lune",
      "name": "Large Cell Neuroendocrine Carcinoma",
      "clinicalTrialKeywords": "large cell neuroendocrine carcinoma",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUNE",
      "parent": "lnet"
    },
    {
      "typeOfCancerId": "hggnos",
      "name": "High-Grade Glioma, NOS",
      "clinicalTrialKeywords": "high-grade glioma, nos",
      "dedicatedColor": "Gray",
      "shortName": "HGGNOS",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "scrms",
      "name": "Spindle Cell Rhabdomyosarcoma",
      "clinicalTrialKeywords": "spindle cell rhabdomyosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "SCRMS",
      "parent": "rms"
    },
    {
      "typeOfCancerId": "chdm",
      "name": "Chordoma",
      "clinicalTrialKeywords": "chordoma",
      "dedicatedColor": "White",
      "shortName": "CHDM",
      "parent": "bone"
    },
    {
      "typeOfCancerId": "hcl",
      "name": "Hairy Cell Leukemia",
      "clinicalTrialKeywords": "hairy cell leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "HCL",
      "parent": "leuk"
    },
    {
      "typeOfCancerId": "odgc",
      "name": "Odontogenic Carcinoma",
      "clinicalTrialKeywords": "odontogenic carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "ODGC",
      "parent": "ohnca"
    },
    {
      "typeOfCancerId": "cchm",
      "name": "Carcinoma with Chondroid Metaplasia",
      "clinicalTrialKeywords": "carcinoma with chondroid metaplasia",
      "dedicatedColor": "HotPink",
      "shortName": "CCHM",
      "parent": "mmbc"
    },
    {
      "typeOfCancerId": "pcv",
      "name": "Polycythemia Vera",
      "clinicalTrialKeywords": "polycythemia vera",
      "dedicatedColor": "LightSalmon",
      "shortName": "PCV",
      "parent": "mpn"
    },
    {
      "typeOfCancerId": "pct",
      "name": "Porphyria Cutania Tarda",
      "clinicalTrialKeywords": "porphyria cutania tarda",
      "dedicatedColor": "Black",
      "shortName": "PCT",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "pdc",
      "name": "Poorly Differentiated Carcinoma, NOS",
      "clinicalTrialKeywords": "poorly differentiated carcinoma, nos",
      "dedicatedColor": "Black",
      "shortName": "PDC",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "mac",
      "name": "Microcystic Adnexal Carcinoma",
      "clinicalTrialKeywords": "microcystic adnexal carcinoma",
      "dedicatedColor": "Black",
      "shortName": "MAC",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "mampca",
      "name": "Mixed Ampullary Carcinoma",
      "clinicalTrialKeywords": "mixed ampullary carcinoma",
      "dedicatedColor": "Purple",
      "shortName": "MAMPCA",
      "parent": "ampca"
    },
    {
      "typeOfCancerId": "hnscup",
      "name": "Head and Neck Squamous Cell Carcinoma of Unknown Primary",
      "clinicalTrialKeywords": "head and neck squamous cell carcinoma of unknown primary",
      "dedicatedColor": "DarkRed",
      "shortName": "HNSCUP",
      "parent": "hnsc"
    },
    {
      "typeOfCancerId": "hcc",
      "name": "Hepatocellular Carcinoma",
      "clinicalTrialKeywords": "hepatocellular carcinoma",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "HCC",
      "parent": "liver"
    },
    {
      "typeOfCancerId": "srap",
      "name": "Signet Ring Cell Type of the Appendix",
      "clinicalTrialKeywords": "signet ring cell type of the appendix",
      "dedicatedColor": "SaddleBrown",
      "shortName": "SRAP",
      "parent": "apad"
    },
    {
      "typeOfCancerId": "stas",
      "name": "Adenosquamous Carcinoma of the Stomach",
      "clinicalTrialKeywords": "adenosquamous carcinoma of the stomach",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "STAS",
      "parent": "egc"
    },
    {
      "typeOfCancerId": "ppct",
      "name": "Proliferating Pilar Cystic Tumor",
      "clinicalTrialKeywords": "proliferating pilar cystic tumor",
      "dedicatedColor": "Black",
      "shortName": "PPCT",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "ovt",
      "name": "Ovarian Epithelial Tumor",
      "clinicalTrialKeywords": "ovarian epithelial tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "OVT",
      "parent": "ovary"
    },
    {
      "typeOfCancerId": "ptad",
      "name": "Pituitary Adenoma",
      "clinicalTrialKeywords": "pituitary adenoma",
      "dedicatedColor": "Gray",
      "shortName": "PTAD",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "tlym",
      "name": "Testicular Lymphoma",
      "clinicalTrialKeywords": "testicular lymphoma",
      "dedicatedColor": "Red",
      "shortName": "TLYM",
      "parent": "testis"
    },
    {
      "typeOfCancerId": "blpt",
      "name": "Borderline Phyllodes Tumor of the Breast",
      "clinicalTrialKeywords": "borderline phyllodes tumor of the breast",
      "dedicatedColor": "HotPink",
      "shortName": "BLPT",
      "parent": "pt"
    },
    {
      "typeOfCancerId": "stad",
      "name": "Stomach Adenocarcinoma",
      "clinicalTrialKeywords": "stomach adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "STAD",
      "parent": "egc"
    },
    {
      "typeOfCancerId": "c0026948",
      "name": "C0026948",
      "clinicalTrialKeywords": "c0026948",
      "dedicatedColor": "LimeGreen",
      "shortName": "C0026948",
      "parent": "c3246"
    },
    {
      "typeOfCancerId": "mov",
      "name": "Mucinous Ovarian Cancer",
      "clinicalTrialKeywords": "mucinous ovarian cancer",
      "dedicatedColor": "LightBlue",
      "shortName": "MOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "aeca",
      "name": "Sweat Gland Carcinoma/Apocrine Eccrine Carcinoma",
      "clinicalTrialKeywords": "sweat gland carcinoma/apocrine eccrine carcinoma",
      "dedicatedColor": "Black",
      "shortName": "AECA",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "vma",
      "name": "Mucinous Adenocarcinoma of the Vulva/Vagina",
      "clinicalTrialKeywords": "mucinous adenocarcinoma of the vulva/vagina",
      "dedicatedColor": "Black",
      "shortName": "VMA",
      "parent": "vulva"
    },
    {
      "typeOfCancerId": "um",
      "name": "Uveal Melanoma",
      "clinicalTrialKeywords": "uveal melanoma",
      "dedicatedColor": "Green",
      "shortName": "UM",
      "parent": "om"
    },
    {
      "typeOfCancerId": "wpscc",
      "name": "Warty Penile Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "warty penile squamous cell carcinoma",
      "dedicatedColor": "Blue",
      "shortName": "WPSCC",
      "parent": "pscc"
    },
    {
      "typeOfCancerId": "ball",
      "name": "B-Cell Acute Lymphoid Leukemia",
      "clinicalTrialKeywords": "b-cell acute lymphoid leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "BALL",
      "parent": "all"
    },
    {
      "typeOfCancerId": "eov",
      "name": "Endometrioid Ovarian Cancer",
      "clinicalTrialKeywords": "endometrioid ovarian cancer",
      "dedicatedColor": "LightBlue",
      "shortName": "EOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "mng",
      "name": "Meningioma",
      "clinicalTrialKeywords": "meningioma",
      "dedicatedColor": "Gray",
      "shortName": "MNG",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "byst",
      "name": "Yolk Sac Tumor",
      "clinicalTrialKeywords": "yolk sac tumor",
      "dedicatedColor": "Gray",
      "shortName": "BYST",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "bcc",
      "name": "Basal Cell Carcinoma",
      "clinicalTrialKeywords": "basal cell carcinoma",
      "dedicatedColor": "Black",
      "shortName": "BCC",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "ua",
      "name": "Urachal Adenocarcinoma",
      "clinicalTrialKeywords": "urachal adenocarcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "UA",
      "parent": "urca"
    },
    {
      "typeOfCancerId": "srcc",
      "name": "Sarcomatoid Renal Cell Carcinoma",
      "clinicalTrialKeywords": "sarcomatoid renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "SRCC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "stomach",
      "name": "Esophagus/Stomach",
      "clinicalTrialKeywords": "esophagus/stomach",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "STOMACH",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "pxa",
      "name": "Pleomorphic Xanthoastrocytoma",
      "clinicalTrialKeywords": "pleomorphic xanthoastrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "PXA",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "vmt",
      "name": "Mature Teratoma",
      "clinicalTrialKeywords": "mature teratoma",
      "dedicatedColor": "Black",
      "shortName": "VMT",
      "parent": "vgct"
    },
    {
      "typeOfCancerId": "chgl",
      "name": "Chordoid Glioma of the Third Ventricle",
      "clinicalTrialKeywords": "chordoid glioma of the third ventricle",
      "dedicatedColor": "Gray",
      "shortName": "CHGL",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "bimt",
      "name": "Immature Teratoma",
      "clinicalTrialKeywords": "immature teratoma",
      "dedicatedColor": "Gray",
      "shortName": "BIMT",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "aptad",
      "name": "Atypical Pituitary Adenoma",
      "clinicalTrialKeywords": "atypical pituitary adenoma",
      "dedicatedColor": "Gray",
      "shortName": "APTAD",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "bcl",
      "name": "B-Cell Lymphoma",
      "clinicalTrialKeywords": "b-cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "BCL",
      "parent": "nhl"
    },
    {
      "typeOfCancerId": "vmm",
      "name": "Mucosal Melanoma of the Vulva/Vagina",
      "clinicalTrialKeywords": "mucosal melanoma of the vulva/vagina",
      "dedicatedColor": "Black",
      "shortName": "VMM",
      "parent": "vulva"
    },
    {
      "typeOfCancerId": "tt",
      "name": "Teratoma",
      "clinicalTrialKeywords": "teratoma",
      "dedicatedColor": "Red",
      "shortName": "TT",
      "parent": "nsgct"
    },
    {
      "typeOfCancerId": "penis",
      "name": "Penis",
      "clinicalTrialKeywords": "penis",
      "dedicatedColor": "Blue",
      "shortName": "PENIS",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "btmov",
      "name": "Brenner Tumor, Malignant",
      "clinicalTrialKeywords": "brenner tumor, malignant",
      "dedicatedColor": "LightBlue",
      "shortName": "BTMOV",
      "parent": "btov"
    },
    {
      "typeOfCancerId": "ptcl",
      "name": "Peripheral T-Cell Lymphoma",
      "clinicalTrialKeywords": "peripheral t-cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "PTCL",
      "parent": "tnkl"
    },
    {
      "typeOfCancerId": "sbc",
      "name": "Small Bowel Cancer",
      "clinicalTrialKeywords": "small bowel cancer",
      "dedicatedColor": "SaddleBrown",
      "shortName": "SBC",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "hnne",
      "name": "Head and Neck Neuroendocrine Carcinoma",
      "clinicalTrialKeywords": "head and neck neuroendocrine carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "HNNE",
      "parent": "ohnca"
    },
    {
      "typeOfCancerId": "sezs",
      "name": "Sezary Syndrome",
      "clinicalTrialKeywords": "sezary syndrome",
      "dedicatedColor": "LimeGreen",
      "shortName": "SEZS",
      "parent": "ctcl"
    },
    {
      "typeOfCancerId": "skac",
      "name": "Skin Adnexal Carcinoma",
      "clinicalTrialKeywords": "skin adnexal carcinoma",
      "dedicatedColor": "Black",
      "shortName": "SKAC",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "ssrcc",
      "name": "Signet Ring Cell Carcinoma of the Stomach",
      "clinicalTrialKeywords": "signet ring cell carcinoma of the stomach",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "SSRCC",
      "parent": "ustad"
    },
    {
      "typeOfCancerId": "mmb",
      "name": "Medullomyoblastoma",
      "clinicalTrialKeywords": "medullomyoblastoma",
      "dedicatedColor": "Gray",
      "shortName": "MMB",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "scbc",
      "name": "Small Cell Bladder Cancer",
      "clinicalTrialKeywords": "small cell bladder cancer",
      "dedicatedColor": "Yellow",
      "shortName": "SCBC",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "ptca",
      "name": "Pituitary Carcinoma",
      "clinicalTrialKeywords": "pituitary carcinoma",
      "dedicatedColor": "Gray",
      "shortName": "PTCA",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "acc",
      "name": "Adrenocortical Carcinoma",
      "clinicalTrialKeywords": "adrenocortical carcinoma",
      "dedicatedColor": "Purple",
      "shortName": "ACC",
      "parent": "adrenal_gland"
    },
    {
      "typeOfCancerId": "ophsc",
      "name": "Oropharynx Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "oropharynx squamous cell carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "OPHSC",
      "parent": "hnsc"
    },
    {
      "typeOfCancerId": "sube",
      "name": "Subependymoma",
      "clinicalTrialKeywords": "subependymoma",
      "dedicatedColor": "Gray",
      "shortName": "SUBE",
      "parent": "epmt"
    },
    {
      "typeOfCancerId": "c0206180",
      "name": "C0206180",
      "clinicalTrialKeywords": "c0206180",
      "dedicatedColor": "LimeGreen",
      "shortName": "C0206180",
      "parent": "c3720"
    },
    {
      "typeOfCancerId": "ptcy",
      "name": "Pituicytoma",
      "clinicalTrialKeywords": "pituicytoma",
      "dedicatedColor": "Gray",
      "shortName": "PTCY",
      "parent": "selt"
    },
    {
      "typeOfCancerId": "mcca",
      "name": "Mucinous Colorectal Carcinoma",
      "clinicalTrialKeywords": "mucinous colorectal carcinoma",
      "dedicatedColor": "SaddleBrown",
      "shortName": "MCCA",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "pcnsl",
      "name": "Primary CNS Lymphoma",
      "clinicalTrialKeywords": "primary cns lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "PCNSL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "acn",
      "name": "Acinar Cell Carcinoma, NOS",
      "clinicalTrialKeywords": "acinar cell carcinoma, nos",
      "dedicatedColor": "Black",
      "shortName": "ACN",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "alcl",
      "name": "Anaplastic Large Cell Lymphoma",
      "clinicalTrialKeywords": "anaplastic large cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "ALCL",
      "parent": "ptcl"
    },
    {
      "typeOfCancerId": "scb",
      "name": "Sarcomatoid Carcinoma of the Urinary Bladder",
      "clinicalTrialKeywords": "sarcomatoid carcinoma of the urinary bladder",
      "dedicatedColor": "Yellow",
      "shortName": "SCB",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "scco",
      "name": "Small Cell Carcinoma of the Ovary",
      "clinicalTrialKeywords": "small cell carcinoma of the ovary",
      "dedicatedColor": "LightBlue",
      "shortName": "SCCO",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "sccr",
      "name": "Scirrhous Carcinoma of the Colon and Rectum",
      "clinicalTrialKeywords": "scirrhous carcinoma of the colon and rectum",
      "dedicatedColor": "SaddleBrown",
      "shortName": "SCCR",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "bone",
      "name": "Bone",
      "clinicalTrialKeywords": "bone",
      "dedicatedColor": "White",
      "shortName": "BONE",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "npc",
      "name": "Nasopharyngeal Carcinoma",
      "clinicalTrialKeywords": "nasopharyngeal carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "NPC",
      "parent": "head_neck"
    },
    {
      "typeOfCancerId": "ocsc",
      "name": "Oral Cavity Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "oral cavity squamous cell carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "OCSC",
      "parent": "hnsc"
    },
    {
      "typeOfCancerId": "wt",
      "name": "Wilms' Tumor",
      "clinicalTrialKeywords": "wilms' tumor",
      "dedicatedColor": "Orange",
      "shortName": "WT",
      "parent": "kidney"
    },
    {
      "typeOfCancerId": "ceen",
      "name": "Endometrioid Carcinoma",
      "clinicalTrialKeywords": "endometrioid carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CEEN",
      "parent": "cead"
    },
    {
      "typeOfCancerId": "vimt",
      "name": "Immature Teratoma",
      "clinicalTrialKeywords": "immature teratoma",
      "dedicatedColor": "Black",
      "shortName": "VIMT",
      "parent": "vgct"
    },
    {
      "typeOfCancerId": "difg",
      "name": "Diffuse Glioma",
      "clinicalTrialKeywords": "diffuse glioma",
      "dedicatedColor": "Gray",
      "shortName": "DIFG",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "read",
      "name": "Rectal Adenocarcinoma",
      "clinicalTrialKeywords": "rectal adenocarcinoma",
      "dedicatedColor": "SaddleBrown",
      "shortName": "READ",
      "parent": "coadread"
    },
    {
      "typeOfCancerId": "mscc",
      "name": "Metaplastic Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "metaplastic squamous cell carcinoma",
      "dedicatedColor": "HotPink",
      "shortName": "MSCC",
      "parent": "embc"
    },
    {
      "typeOfCancerId": "oast",
      "name": "Oligoastrocytoma",
      "clinicalTrialKeywords": "oligoastrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "OAST",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "mcap",
      "name": "Malignant Carcinoid of the Appendix",
      "clinicalTrialKeywords": "malignant carcinoid of the appendix",
      "dedicatedColor": "SaddleBrown",
      "shortName": "MCAP",
      "parent": "apad"
    },
    {
      "typeOfCancerId": "tall",
      "name": "T-Cell Acute Lymphoid Leukemia",
      "clinicalTrialKeywords": "t-cell acute lymphoid leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "TALL",
      "parent": "all"
    },
    {
      "typeOfCancerId": "aca",
      "name": "Adrenocortical Adenoma",
      "clinicalTrialKeywords": "adrenocortical adenoma",
      "dedicatedColor": "Purple",
      "shortName": "ACA",
      "parent": "adrenal_gland"
    },
    {
      "typeOfCancerId": "hnmasc",
      "name": "Mammary Analogue Secretory Carcinoma of Salivary Gland Origin",
      "clinicalTrialKeywords": "mammary analogue secretory carcinoma of salivary gland origin",
      "dedicatedColor": "DarkRed",
      "shortName": "HNMASC",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "pint",
      "name": "Pineal Tumor",
      "clinicalTrialKeywords": "pineal tumor",
      "dedicatedColor": "Gray",
      "shortName": "PINT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "wm",
      "name": "Waldenstrom Macroglobulinemia",
      "clinicalTrialKeywords": "waldenstrom macroglobulinemia",
      "dedicatedColor": "LimeGreen",
      "shortName": "WM",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "aodg",
      "name": "Anaplastic Oligodendroglioma",
      "clinicalTrialKeywords": "anaplastic oligodendroglioma",
      "dedicatedColor": "Gray",
      "shortName": "AODG",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "scce",
      "name": "Small Cell Carcinoma of the Cervix",
      "clinicalTrialKeywords": "small cell carcinoma of the cervix",
      "dedicatedColor": "Teal",
      "shortName": "SCCE",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "ccrcc",
      "name": "Renal Clear Cell Carcinoma",
      "clinicalTrialKeywords": "renal clear cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "CCRCC",
      "parent": "rcc"
    },
    {
      "typeOfCancerId": "pgnt",
      "name": "Papillary Glioneuronal Tumor",
      "clinicalTrialKeywords": "papillary glioneuronal tumor",
      "dedicatedColor": "Gray",
      "shortName": "PGNT",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "gcemu",
      "name": "Gastric Type Mucinous Carcinoma",
      "clinicalTrialKeywords": "gastric type mucinous carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "GCEMU",
      "parent": "cemu"
    },
    {
      "typeOfCancerId": "sgad",
      "name": "Sweat Gland Adenocarcinoma",
      "clinicalTrialKeywords": "sweat gland adenocarcinoma",
      "dedicatedColor": "Black",
      "shortName": "SGAD",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "utuc",
      "name": "Upper Tract Urothelial Carcinoma",
      "clinicalTrialKeywords": "upper tract urothelial carcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "UTUC",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "bec",
      "name": "Embryonal Carcinoma",
      "clinicalTrialKeywords": "embryonal carcinoma",
      "dedicatedColor": "Gray",
      "shortName": "BEC",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "pgng",
      "name": "Paraganglioma",
      "clinicalTrialKeywords": "paraganglioma",
      "dedicatedColor": "Gray",
      "shortName": "PGNG",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "mdep",
      "name": "Medulloepithelioma",
      "clinicalTrialKeywords": "medulloepithelioma",
      "dedicatedColor": "Gray",
      "shortName": "MDEP",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "pinc",
      "name": "Pineocytoma",
      "clinicalTrialKeywords": "pineocytoma",
      "dedicatedColor": "Gray",
      "shortName": "PINC",
      "parent": "pint"
    },
    {
      "typeOfCancerId": "mucc",
      "name": "Mucoepidermoid Carcinoma",
      "clinicalTrialKeywords": "mucoepidermoid carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "MUCC",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "btov",
      "name": "Brenner Tumor",
      "clinicalTrialKeywords": "brenner tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "BTOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "secos",
      "name": "Secondary Osteosarcoma",
      "clinicalTrialKeywords": "secondary osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "SECOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "raml",
      "name": "Renal Angiomyolipoma",
      "clinicalTrialKeywords": "renal angiomyolipoma",
      "dedicatedColor": "Orange",
      "shortName": "RAML",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "vdys",
      "name": "Dysgerminoma",
      "clinicalTrialKeywords": "dysgerminoma",
      "dedicatedColor": "Black",
      "shortName": "VDYS",
      "parent": "vgct"
    },
    {
      "typeOfCancerId": "vgce",
      "name": "Villoglandular Adenocarcinoma of the Cervix",
      "clinicalTrialKeywords": "villoglandular adenocarcinoma of the cervix",
      "dedicatedColor": "Teal",
      "shortName": "VGCE",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "thfo",
      "name": "Follicular Thyroid Cancer",
      "clinicalTrialKeywords": "follicular thyroid cancer",
      "dedicatedColor": "Teal",
      "shortName": "THFO",
      "parent": "thyroid"
    },
    {
      "typeOfCancerId": "hphsc",
      "name": "Hypopharynx Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "hypopharynx squamous cell carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "HPHSC",
      "parent": "hnsc"
    },
    {
      "typeOfCancerId": "bpscc",
      "name": "Basaloid Penile Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "basaloid penile squamous cell carcinoma",
      "dedicatedColor": "Blue",
      "shortName": "BPSCC",
      "parent": "pscc"
    },
    {
      "typeOfCancerId": "ccoc",
      "name": "Clear Cell Odontogenic Carcinoma",
      "clinicalTrialKeywords": "clear cell odontogenic carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "CCOC",
      "parent": "odgc"
    },
    {
      "typeOfCancerId": "tyst",
      "name": "Yolk Sac Tumor",
      "clinicalTrialKeywords": "yolk sac tumor",
      "dedicatedColor": "Red",
      "shortName": "TYST",
      "parent": "nsgct"
    },
    {
      "typeOfCancerId": "vpe",
      "name": "Polyembryoma",
      "clinicalTrialKeywords": "polyembryoma",
      "dedicatedColor": "Black",
      "shortName": "VPE",
      "parent": "vgct"
    },
    {
      "typeOfCancerId": "aitl",
      "name": "Angioimmunoblastic T-Cell Lymphoma",
      "clinicalTrialKeywords": "angioimmunoblastic t-cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "AITL",
      "parent": "ptcl"
    },
    {
      "typeOfCancerId": "hema",
      "name": "Hemangioma",
      "clinicalTrialKeywords": "hemangioma",
      "dedicatedColor": "LightYellow",
      "shortName": "HEMA",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "sct",
      "name": "Steroid Cell Tumor, NOS",
      "clinicalTrialKeywords": "steroid cell tumor, nos",
      "dedicatedColor": "LightBlue",
      "shortName": "SCT",
      "parent": "scst"
    },
    {
      "typeOfCancerId": "mben",
      "name": "Medulloblastoma with Extensive Nodularity",
      "clinicalTrialKeywords": "medulloblastoma with extensive nodularity",
      "dedicatedColor": "Gray",
      "shortName": "MBEN",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "ptes",
      "name": "Proximal-Type Epithelioid Sarcoma",
      "clinicalTrialKeywords": "proximal-type epithelioid sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "PTES",
      "parent": "epis"
    },
    {
      "typeOfCancerId": "hpccns",
      "name": "Hemangiopericytoma of the Central Nervous System",
      "clinicalTrialKeywords": "hemangiopericytoma of the central nervous system",
      "dedicatedColor": "Gray",
      "shortName": "HPCCNS",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "immc",
      "name": "Breast Invasive Mixed Mucinous Carcinoma",
      "clinicalTrialKeywords": "breast invasive mixed mucinous carcinoma",
      "dedicatedColor": "HotPink",
      "shortName": "IMMC",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "mascc",
      "name": "Metaplastic Adenocarcinoma with Spindle Cell Differentiation",
      "clinicalTrialKeywords": "metaplastic adenocarcinoma with spindle cell differentiation",
      "dedicatedColor": "HotPink",
      "shortName": "MASCC",
      "parent": "embc"
    },
    {
      "typeOfCancerId": "mngt",
      "name": "Meningothelial Tumor",
      "clinicalTrialKeywords": "meningothelial tumor",
      "dedicatedColor": "Gray",
      "shortName": "MNGT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "osmad",
      "name": "Ovarian Seromucinous Adenoma",
      "clinicalTrialKeywords": "ovarian seromucinous adenoma",
      "dedicatedColor": "LightBlue",
      "shortName": "OSMAD",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "ulm",
      "name": "Uterine Leiomyoma",
      "clinicalTrialKeywords": "uterine leiomyoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "ULM",
      "parent": "usmt"
    },
    {
      "typeOfCancerId": "hnsc",
      "name": "Head and Neck Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "head and neck squamous cell carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "HNSC",
      "parent": "head_neck"
    },
    {
      "typeOfCancerId": "sef",
      "name": "Sclerosing Epithelioid Fibrosarcoma",
      "clinicalTrialKeywords": "sclerosing epithelioid fibrosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "SEF",
      "parent": "fibs"
    },
    {
      "typeOfCancerId": "osmbt",
      "name": "Ovarian Seromucinous Borderline Tumor",
      "clinicalTrialKeywords": "ovarian seromucinous borderline tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "OSMBT",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "cecc",
      "name": "Cervical Clear Cell Carcinoma",
      "clinicalTrialKeywords": "cervical clear cell carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CECC",
      "parent": "cead"
    },
    {
      "typeOfCancerId": "umc",
      "name": "Uterine Mucinous Carcinoma",
      "clinicalTrialKeywords": "uterine mucinous carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UMC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "sem",
      "name": "Seminoma",
      "clinicalTrialKeywords": "seminoma",
      "dedicatedColor": "Red",
      "shortName": "SEM",
      "parent": "testis"
    },
    {
      "typeOfCancerId": "rocy",
      "name": "Renal Oncocytoma",
      "clinicalTrialKeywords": "renal oncocytoma",
      "dedicatedColor": "Orange",
      "shortName": "ROCY",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "astb",
      "name": "Astroblastoma",
      "clinicalTrialKeywords": "astroblastoma",
      "dedicatedColor": "Gray",
      "shortName": "ASTB",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "pt",
      "name": "Phyllodes Tumor of the Breast",
      "clinicalTrialKeywords": "phyllodes tumor of the breast",
      "dedicatedColor": "HotPink",
      "shortName": "PT",
      "parent": "pbs"
    },
    {
      "typeOfCancerId": "vgct",
      "name": "Germ Cell Tumor of the Vulva",
      "clinicalTrialKeywords": "germ cell tumor of the vulva",
      "dedicatedColor": "Black",
      "shortName": "VGCT",
      "parent": "vulva"
    },
    {
      "typeOfCancerId": "saad",
      "name": "Salivary Adenocarcinoma",
      "clinicalTrialKeywords": "salivary adenocarcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "SAAD",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "vulva",
      "name": "Vulva/Vagina",
      "clinicalTrialKeywords": "vulva/vagina",
      "dedicatedColor": "Black",
      "shortName": "VULVA",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "lgsoc",
      "name": "Low-Grade Serous Ovarian Cancer",
      "clinicalTrialKeywords": "low-grade serous ovarian cancer",
      "dedicatedColor": "LightBlue",
      "shortName": "LGSOC",
      "parent": "soc"
    },
    {
      "typeOfCancerId": "pampca",
      "name": "Pancreatobiliary Ampullary Carcinoma",
      "clinicalTrialKeywords": "pancreatobiliary ampullary carcinoma",
      "dedicatedColor": "Purple",
      "shortName": "PAMPCA",
      "parent": "ampca"
    },
    {
      "typeOfCancerId": "ambl",
      "name": "Large Cell/Anaplastic Medulloblastoma",
      "clinicalTrialKeywords": "large cell/anaplastic medulloblastoma",
      "dedicatedColor": "Gray",
      "shortName": "AMBL",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "astr",
      "name": "Astrocytoma",
      "clinicalTrialKeywords": "astrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "ASTR",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "angs",
      "name": "Angiosarcoma",
      "clinicalTrialKeywords": "angiosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "ANGS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "stmyec",
      "name": "Soft Tissue Myoepithelial Carcinoma",
      "clinicalTrialKeywords": "soft tissue myoepithelial carcinoma",
      "dedicatedColor": "LightYellow",
      "shortName": "STMYEC",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "lms",
      "name": "Leiomyosarcoma",
      "clinicalTrialKeywords": "leiomyosarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "LMS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "tstad",
      "name": "Tubular Stomach Adenocarcinoma",
      "clinicalTrialKeywords": "tubular stomach adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "TSTAD",
      "parent": "stad"
    },
    {
      "typeOfCancerId": "head_neck",
      "name": "Head and Neck",
      "clinicalTrialKeywords": "head and neck",
      "dedicatedColor": "DarkRed",
      "shortName": "HEAD_NECK",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "uterus",
      "name": "Uterus",
      "clinicalTrialKeywords": "uterus",
      "dedicatedColor": "PeachPuff",
      "shortName": "UTERUS",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "angl",
      "name": "Angiocentric Glioma",
      "clinicalTrialKeywords": "angiocentric glioma",
      "dedicatedColor": "Gray",
      "shortName": "ANGL",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "mnet",
      "name": "Miscellaneous Neuroepithelial Tumor",
      "clinicalTrialKeywords": "miscellaneous neuroepithelial tumor",
      "dedicatedColor": "Gray",
      "shortName": "MNET",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "spdac",
      "name": "Poorly Differentiated Carcinoma of the Stomach",
      "clinicalTrialKeywords": "poorly differentiated carcinoma of the stomach",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "SPDAC",
      "parent": "ustad"
    },
    {
      "typeOfCancerId": "thhc",
      "name": "Hurthle Cell Thyroid Cancer",
      "clinicalTrialKeywords": "hurthle cell thyroid cancer",
      "dedicatedColor": "Teal",
      "shortName": "THHC",
      "parent": "thyroid"
    },
    {
      "typeOfCancerId": "cerms",
      "name": "Cervical Rhabdomyosarcoma",
      "clinicalTrialKeywords": "cervical rhabdomyosarcoma",
      "dedicatedColor": "Teal",
      "shortName": "CERMS",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "iampca",
      "name": "Intestinal Ampullary Carcinoma",
      "clinicalTrialKeywords": "intestinal ampullary carcinoma",
      "dedicatedColor": "Purple",
      "shortName": "IAMPCA",
      "parent": "ampca"
    },
    {
      "typeOfCancerId": "sklmm",
      "name": "Lentigo Maligna Melanoma",
      "clinicalTrialKeywords": "lentigo maligna melanoma",
      "dedicatedColor": "Black",
      "shortName": "SKLMM",
      "parent": "mel"
    },
    {
      "typeOfCancerId": "mbcl",
      "name": "Mediastinal Large B-Cell Lymphoma",
      "clinicalTrialKeywords": "mediastinal large b-cell lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "MBCL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "bowel",
      "name": "Bowel",
      "clinicalTrialKeywords": "bowel",
      "dedicatedColor": "SaddleBrown",
      "shortName": "BOWEL",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "chl",
      "name": "Classical Hodgkin Lymphoma",
      "clinicalTrialKeywords": "classical hodgkin lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "CHL",
      "parent": "hl"
    },
    {
      "typeOfCancerId": "chm",
      "name": "Complete Hydatidiform Mole",
      "clinicalTrialKeywords": "complete hydatidiform mole",
      "dedicatedColor": "PeachPuff",
      "shortName": "CHM",
      "parent": "mp"
    },
    {
      "typeOfCancerId": "dia",
      "name": "Desmoplastic Infantile Astrocytoma",
      "clinicalTrialKeywords": "desmoplastic infantile astrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "DIA",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "uasc",
      "name": "Uterine Adenosquamous Carcinoma",
      "clinicalTrialKeywords": "uterine adenosquamous carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UASC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "tet",
      "name": "Thymic Epithelial Tumor",
      "clinicalTrialKeywords": "thymic epithelial tumor",
      "dedicatedColor": "Purple",
      "shortName": "TET",
      "parent": "thymus"
    },
    {
      "typeOfCancerId": "chs",
      "name": "Chondrosarcoma",
      "clinicalTrialKeywords": "chondrosarcoma",
      "dedicatedColor": "White",
      "shortName": "CHS",
      "parent": "bone"
    },
    {
      "typeOfCancerId": "cead",
      "name": "Cervical Adenocarcinoma",
      "clinicalTrialKeywords": "cervical adenocarcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CEAD",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "dig",
      "name": "Desmoplastic Infantile Ganglioglioma",
      "clinicalTrialKeywords": "desmoplastic infantile ganglioglioma",
      "dedicatedColor": "Gray",
      "shortName": "DIG",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "afx",
      "name": "Atypical Fibroxanthoma",
      "clinicalTrialKeywords": "atypical fibroxanthoma",
      "dedicatedColor": "Black",
      "shortName": "AFX",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "sm",
      "name": "Systemic Mastocytosis",
      "clinicalTrialKeywords": "systemic mastocytosis",
      "dedicatedColor": "LightSalmon",
      "shortName": "SM",
      "parent": "blood"
    },
    {
      "typeOfCancerId": "agng",
      "name": "Anaplastic Ganglioglioma",
      "clinicalTrialKeywords": "anaplastic ganglioglioma",
      "dedicatedColor": "Gray",
      "shortName": "AGNG",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "maap",
      "name": "Mucinous Adenocarcinoma of the Appendix",
      "clinicalTrialKeywords": "mucinous adenocarcinoma of the appendix",
      "dedicatedColor": "SaddleBrown",
      "shortName": "MAAP",
      "parent": "apad"
    },
    {
      "typeOfCancerId": "sarcnos",
      "name": "Sarcoma, NOS",
      "clinicalTrialKeywords": "sarcoma, nos",
      "dedicatedColor": "LightYellow",
      "shortName": "SARCNOS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "myxo",
      "name": "Myxoma",
      "clinicalTrialKeywords": "myxoma",
      "dedicatedColor": "LightYellow",
      "shortName": "MYXO",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "paos",
      "name": "Parosteal Osteosarcoma",
      "clinicalTrialKeywords": "parosteal osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "PAOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "ginet",
      "name": "Gastrointestinal Neuroendocrine Tumors",
      "clinicalTrialKeywords": "gastrointestinal neuroendocrine tumors",
      "dedicatedColor": "SaddleBrown",
      "shortName": "GINET",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "blclc",
      "name": "Basaloid Large Cell Carcinoma of the Lung",
      "clinicalTrialKeywords": "basaloid large cell carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "BLCLC",
      "parent": "lclc"
    },
    {
      "typeOfCancerId": "ceas",
      "name": "Cervical Adenosquamous Carcinoma",
      "clinicalTrialKeywords": "cervical adenosquamous carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CEAS",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "sft",
      "name": "Solitary Fibrous Tumor/Hemangiopericytoma",
      "clinicalTrialKeywords": "solitary fibrous tumor/hemangiopericytoma",
      "dedicatedColor": "LightYellow",
      "shortName": "SFT",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "pnet",
      "name": "Primitive Neuroectodermal Tumor",
      "clinicalTrialKeywords": "primitive neuroectodermal tumor",
      "dedicatedColor": "Gray",
      "shortName": "PNET",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "pemeso",
      "name": "Peritoneal Mesothelioma",
      "clinicalTrialKeywords": "peritoneal mesothelioma",
      "dedicatedColor": "Green",
      "shortName": "PEMESO",
      "parent": "peritoneum"
    },
    {
      "typeOfCancerId": "bpdcn",
      "name": "Blastic Plasmacytoid Dendritic Cell Neoplasm",
      "clinicalTrialKeywords": "blastic plasmacytoid dendritic cell neoplasm",
      "dedicatedColor": "LightSalmon",
      "shortName": "BPDCN",
      "parent": "blood"
    },
    {
      "typeOfCancerId": "skcm",
      "name": "Cutaneous Melanoma",
      "clinicalTrialKeywords": "cutaneous melanoma",
      "dedicatedColor": "Black",
      "shortName": "SKCM",
      "parent": "mel"
    },
    {
      "typeOfCancerId": "cdrcc",
      "name": "Collecting Duct Renal Cell Carcinoma",
      "clinicalTrialKeywords": "collecting duct renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "CDRCC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "usarc",
      "name": "Uterine Sarcoma/Mesenchymal",
      "clinicalTrialKeywords": "uterine sarcoma/mesenchymal",
      "dedicatedColor": "PeachPuff",
      "shortName": "USARC",
      "parent": "uterus"
    },
    {
      "typeOfCancerId": "skcn",
      "name": "Congenital Nevus",
      "clinicalTrialKeywords": "congenital nevus",
      "dedicatedColor": "Black",
      "shortName": "SKCN",
      "parent": "mel"
    },
    {
      "typeOfCancerId": "chrcc",
      "name": "Chromophobe Renal Cell Carcinoma",
      "clinicalTrialKeywords": "chromophobe renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "CHRCC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "brsrcc",
      "name": "Breast Carcinoma with Signet Ring",
      "clinicalTrialKeywords": "breast carcinoma with signet ring",
      "dedicatedColor": "HotPink",
      "shortName": "BRSRCC",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "smzl",
      "name": "Splenic Marginal Zone Lymphoma",
      "clinicalTrialKeywords": "splenic marginal zone lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "SMZL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "ccov",
      "name": "Clear Cell Ovarian Cancer",
      "clinicalTrialKeywords": "clear cell ovarian cancer",
      "dedicatedColor": "LightBlue",
      "shortName": "CCOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "sarcl",
      "name": "Sarcomatoid Carcinoma of the Lung",
      "clinicalTrialKeywords": "sarcomatoid carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "SARCL",
      "parent": "lung"
    },
    {
      "typeOfCancerId": "mtscc",
      "name": "Renal Mucinous Tubular Spindle Cell Carcinoma",
      "clinicalTrialKeywords": "renal mucinous tubular spindle cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "MTSCC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "embca",
      "name": "Embryonal Carcinoma",
      "clinicalTrialKeywords": "embryonal carcinoma",
      "dedicatedColor": "Red",
      "shortName": "EMBCA",
      "parent": "nsgct"
    },
    {
      "typeOfCancerId": "pns",
      "name": "Peripheral Nervous System",
      "clinicalTrialKeywords": "peripheral nervous system",
      "dedicatedColor": "Gray",
      "shortName": "PNS",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "lxsc",
      "name": "Larynx Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "larynx squamous cell carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "LXSC",
      "parent": "hnsc"
    },
    {
      "typeOfCancerId": "bladder",
      "name": "Bladder/Urinary Tract",
      "clinicalTrialKeywords": "bladder/urinary tract",
      "dedicatedColor": "Yellow",
      "shortName": "BLADDER",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "flc",
      "name": "Fibrolamellar Carcinoma",
      "clinicalTrialKeywords": "fibrolamellar carcinoma",
      "dedicatedColor": "MediumSeaGreen",
      "shortName": "FLC",
      "parent": "liver"
    },
    {
      "typeOfCancerId": "non-hodgkin lymphoma",
      "name": "Non-Hodgkin Lymphoma",
      "clinicalTrialKeywords": "non-hodgkin lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "Non-Hodgkin Lymphoma",
      "parent": "mf"
    },
    {
      "typeOfCancerId": "sclc",
      "name": "Small Cell Lung Cancer",
      "clinicalTrialKeywords": "small cell lung cancer",
      "dedicatedColor": "Gainsboro",
      "shortName": "SCLC",
      "parent": "lnet"
    },
    {
      "typeOfCancerId": "poca",
      "name": "Porocarcinoma/Spiroadenocarcinoma",
      "clinicalTrialKeywords": "porocarcinoma/spiroadenocarcinoma",
      "dedicatedColor": "Black",
      "shortName": "POCA",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "ulms",
      "name": "Uterine Leiomyosarcoma",
      "clinicalTrialKeywords": "uterine leiomyosarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "ULMS",
      "parent": "usmt"
    },
    {
      "typeOfCancerId": "ihch",
      "name": "Intrahepatic Cholangiocarcinoma",
      "clinicalTrialKeywords": "intrahepatic cholangiocarcinoma",
      "dedicatedColor": "Green",
      "shortName": "IHCH",
      "parent": "chol"
    },
    {
      "typeOfCancerId": "uelms",
      "name": "Uterine Epithelioid Leiomyosarcoma",
      "clinicalTrialKeywords": "uterine epithelioid leiomyosarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UELMS",
      "parent": "usmt"
    },
    {
      "typeOfCancerId": "sftcns",
      "name": "Solitary Fibrous Tumor of the Central Nervous System",
      "clinicalTrialKeywords": "solitary fibrous tumor of the central nervous system",
      "dedicatedColor": "Gray",
      "shortName": "SFTCNS",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "mchs",
      "name": "Mesenchymal Chondrosarcoma",
      "clinicalTrialKeywords": "mesenchymal chondrosarcoma",
      "dedicatedColor": "White",
      "shortName": "MCHS",
      "parent": "chs"
    },
    {
      "typeOfCancerId": "spn",
      "name": "Solid Pseudopapillary Neoplasm of the Pancreas",
      "clinicalTrialKeywords": "solid pseudopapillary neoplasm of the pancreas",
      "dedicatedColor": "Purple",
      "shortName": "SPN",
      "parent": "pancreas"
    },
    {
      "typeOfCancerId": "usmt",
      "name": "Uterine Smooth Muscle Tumor",
      "clinicalTrialKeywords": "uterine smooth muscle tumor",
      "dedicatedColor": "PeachPuff",
      "shortName": "USMT",
      "parent": "usarc"
    },
    {
      "typeOfCancerId": "odys",
      "name": "Dysgerminoma",
      "clinicalTrialKeywords": "dysgerminoma",
      "dedicatedColor": "LightBlue",
      "shortName": "ODYS",
      "parent": "ogct"
    },
    {
      "typeOfCancerId": "ddls",
      "name": "Dedifferentiated Liposarcoma",
      "clinicalTrialKeywords": "dedifferentiated liposarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "DDLS",
      "parent": "lipo"
    },
    {
      "typeOfCancerId": "luca",
      "name": "Lung Carcinoid",
      "clinicalTrialKeywords": "lung carcinoid",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUCA",
      "parent": "lnet"
    },
    {
      "typeOfCancerId": "chos",
      "name": "Chondroblastic Osteosarcoma",
      "clinicalTrialKeywords": "chondroblastic osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "CHOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "scup",
      "name": "Small Cell Carcinoma of Unknown Primary",
      "clinicalTrialKeywords": "small cell carcinoma of unknown primary",
      "dedicatedColor": "Black",
      "shortName": "SCUP",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "dte",
      "name": "Desmoplastic Trichoepithelioma",
      "clinicalTrialKeywords": "desmoplastic trichoepithelioma",
      "dedicatedColor": "Black",
      "shortName": "DTE",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "chom",
      "name": "Chordoid Meningioma",
      "clinicalTrialKeywords": "chordoid meningioma",
      "dedicatedColor": "Gray",
      "shortName": "CHOM",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "com",
      "name": "Carcinoma with Osseous Metaplasia",
      "clinicalTrialKeywords": "carcinoma with osseous metaplasia",
      "dedicatedColor": "HotPink",
      "shortName": "COM",
      "parent": "mmbc"
    },
    {
      "typeOfCancerId": "chol",
      "name": "Cholangiocarcinoma",
      "clinicalTrialKeywords": "cholangiocarcinoma",
      "dedicatedColor": "Green",
      "shortName": "CHOL",
      "parent": "biliary_tract"
    },
    {
      "typeOfCancerId": "paasc",
      "name": "Adenosquamous Carcinoma of the Pancreas",
      "clinicalTrialKeywords": "adenosquamous carcinoma of the pancreas",
      "dedicatedColor": "Purple",
      "shortName": "PAASC",
      "parent": "pancreas"
    },
    {
      "typeOfCancerId": "cupnos",
      "name": "Cancer of Unknown Primary, NOS",
      "clinicalTrialKeywords": "cancer of unknown primary, nos",
      "dedicatedColor": "Black",
      "shortName": "CUPNOS",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "cpc",
      "name": "Choroid Plexus Carcinoma",
      "clinicalTrialKeywords": "choroid plexus carcinoma",
      "dedicatedColor": "Gray",
      "shortName": "CPC",
      "parent": "cpt"
    },
    {
      "typeOfCancerId": "gng",
      "name": "Ganglioglioma",
      "clinicalTrialKeywords": "ganglioglioma",
      "dedicatedColor": "Gray",
      "shortName": "GNG",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "pancreas",
      "name": "Pancreas",
      "clinicalTrialKeywords": "pancreas",
      "dedicatedColor": "Purple",
      "shortName": "PANCREAS",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "esca",
      "name": "Esophageal Adenocarcinoma",
      "clinicalTrialKeywords": "esophageal adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "ESCA",
      "parent": "egc"
    },
    {
      "typeOfCancerId": "pact",
      "name": "Cystic Tumor of the Pancreas",
      "clinicalTrialKeywords": "cystic tumor of the pancreas",
      "dedicatedColor": "Purple",
      "shortName": "PACT",
      "parent": "pancreas"
    },
    {
      "typeOfCancerId": "escc",
      "name": "Esophageal Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "esophageal squamous cell carcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "ESCC",
      "parent": "stomach"
    },
    {
      "typeOfCancerId": "osmca",
      "name": "Ovarian Seromucinous Carcinoma",
      "clinicalTrialKeywords": "ovarian seromucinous carcinoma",
      "dedicatedColor": "LightBlue",
      "shortName": "OSMCA",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "dipg",
      "name": "Diffuse Intrinsic Pontine Glioma",
      "clinicalTrialKeywords": "diffuse intrinsic pontine glioma",
      "dedicatedColor": "Gray",
      "shortName": "DIPG",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "gclc",
      "name": "Giant Cell Carcinoma of the Lung",
      "clinicalTrialKeywords": "giant cell carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "GCLC",
      "parent": "lclc"
    },
    {
      "typeOfCancerId": "bmgct",
      "name": "Mixed Germ Cell Tumor",
      "clinicalTrialKeywords": "mixed germ cell tumor",
      "dedicatedColor": "Gray",
      "shortName": "BMGCT",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "gnc",
      "name": "Gangliocytoma",
      "clinicalTrialKeywords": "gangliocytoma",
      "dedicatedColor": "Gray",
      "shortName": "GNC",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "aoast",
      "name": "Anaplastic Oligoastrocytoma",
      "clinicalTrialKeywords": "anaplastic oligoastrocytoma",
      "dedicatedColor": "Gray",
      "shortName": "AOAST",
      "parent": "difg"
    },
    {
      "typeOfCancerId": "lnet",
      "name": "Lung Neuroendocrine Tumor",
      "clinicalTrialKeywords": "lung neuroendocrine tumor",
      "dedicatedColor": "Gainsboro",
      "shortName": "LNET",
      "parent": "lung"
    },
    {
      "typeOfCancerId": "cll",
      "name": "Chronic Lymphocytic Leukemia",
      "clinicalTrialKeywords": "chronic lymphocytic leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "CLL",
      "parent": "leuk"
    },
    {
      "typeOfCancerId": "adrenal_gland",
      "name": "Adrenal Gland",
      "clinicalTrialKeywords": "adrenal gland",
      "dedicatedColor": "Purple",
      "shortName": "ADRENAL_GLAND",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "emchs",
      "name": "Extraskeletal Myxoid Chondrosarcoma",
      "clinicalTrialKeywords": "extraskeletal myxoid chondrosarcoma",
      "dedicatedColor": "White",
      "shortName": "EMCHS",
      "parent": "chs"
    },
    {
      "typeOfCancerId": "ustump",
      "name": "Uterine Smooth Muscle Tumor of Uncertain Malignant Potential",
      "clinicalTrialKeywords": "uterine smooth muscle tumor of uncertain malignant potential",
      "dedicatedColor": "PeachPuff",
      "shortName": "USTUMP",
      "parent": "usmt"
    },
    {
      "typeOfCancerId": "testis",
      "name": "Testis",
      "clinicalTrialKeywords": "testis",
      "dedicatedColor": "Red",
      "shortName": "TESTIS",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "hgsos",
      "name": "High-Grade Surface Osteosarcoma",
      "clinicalTrialKeywords": "high-grade surface osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "HGSOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "maltl",
      "name": "Extranodal Marginal Zone Lymphoma",
      "clinicalTrialKeywords": "extranodal marginal zone lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "MALTL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "mxov",
      "name": "Mixed Ovarian Carcinoma",
      "clinicalTrialKeywords": "mixed ovarian carcinoma",
      "dedicatedColor": "LightBlue",
      "shortName": "MXOV",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "onbl",
      "name": "Olfactory Neuroblastoma",
      "clinicalTrialKeywords": "olfactory neuroblastoma",
      "dedicatedColor": "Gray",
      "shortName": "ONBL",
      "parent": "embt"
    },
    {
      "typeOfCancerId": "gmn",
      "name": "Germinoma",
      "clinicalTrialKeywords": "germinoma",
      "dedicatedColor": "Gray",
      "shortName": "GMN",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "mup",
      "name": "Melanoma of Unknown Primary",
      "clinicalTrialKeywords": "melanoma of unknown primary",
      "dedicatedColor": "Black",
      "shortName": "MUP",
      "parent": "mel"
    },
    {
      "typeOfCancerId": "acyc",
      "name": "Adenoid Cystic Carcinoma",
      "clinicalTrialKeywords": "adenoid cystic carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "ACYC",
      "parent": "saca"
    },
    {
      "typeOfCancerId": "ett",
      "name": "Epithelioid Trophoblastic Tumor",
      "clinicalTrialKeywords": "epithelioid trophoblastic tumor",
      "dedicatedColor": "PeachPuff",
      "shortName": "ETT",
      "parent": "gtd"
    },
    {
      "typeOfCancerId": "ppm",
      "name": "Papillary Meningioma",
      "clinicalTrialKeywords": "papillary meningioma",
      "dedicatedColor": "Gray",
      "shortName": "PPM",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "srcbc",
      "name": "Plasmacytoid/Signet Ring Cell Bladder Carcinoma",
      "clinicalTrialKeywords": "plasmacytoid/signet ring cell bladder carcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "SRCBC",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "luacc",
      "name": "Adenoid Cystic Carcinoma of the Lung",
      "clinicalTrialKeywords": "adenoid cystic carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUACC",
      "parent": "sgttl"
    },
    {
      "typeOfCancerId": "hgsoc",
      "name": "High-Grade Serous Ovarian Cancer",
      "clinicalTrialKeywords": "high-grade serous ovarian cancer",
      "dedicatedColor": "LightBlue",
      "shortName": "HGSOC",
      "parent": "soc"
    },
    {
      "typeOfCancerId": "skin",
      "name": "Skin",
      "clinicalTrialKeywords": "skin",
      "dedicatedColor": "Black",
      "shortName": "SKIN",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "scemu",
      "name": "Signet Ring Mucinous Carcinoma",
      "clinicalTrialKeywords": "signet ring mucinous carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "SCEMU",
      "parent": "cemu"
    },
    {
      "typeOfCancerId": "omt",
      "name": "Mature Teratoma",
      "clinicalTrialKeywords": "mature teratoma",
      "dedicatedColor": "LightBlue",
      "shortName": "OMT",
      "parent": "ogct"
    },
    {
      "typeOfCancerId": "lggnos",
      "name": "Low-Grade Glioma, NOS",
      "clinicalTrialKeywords": "low-grade glioma, nos",
      "dedicatedColor": "Gray",
      "shortName": "LGGNOS",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "bmgt",
      "name": "Malignant Teratoma",
      "clinicalTrialKeywords": "malignant teratoma",
      "dedicatedColor": "Gray",
      "shortName": "BMGT",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "cene",
      "name": "Cervical Neuroendocrine Tumor",
      "clinicalTrialKeywords": "cervical neuroendocrine tumor",
      "dedicatedColor": "Teal",
      "shortName": "CENE",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "lgll",
      "name": "Large Granular Lymphocytic Leukemia",
      "clinicalTrialKeywords": "large granular lymphocytic leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "LGLL",
      "parent": "leuk"
    },
    {
      "typeOfCancerId": "plmeso",
      "name": "Pleural Mesothelioma",
      "clinicalTrialKeywords": "pleural mesothelioma",
      "dedicatedColor": "Blue",
      "shortName": "PLMESO",
      "parent": "pleura"
    },
    {
      "typeOfCancerId": "cml",
      "name": "Chronic Myelogenous Leukemia",
      "clinicalTrialKeywords": "chronic myelogenous leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "CML",
      "parent": "leuk"
    },
    {
      "typeOfCancerId": "evn",
      "name": "Extraventricular Neurocytoma",
      "clinicalTrialKeywords": "extraventricular neurocytoma",
      "dedicatedColor": "Gray",
      "shortName": "EVN",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "bmt",
      "name": "Mature Teratoma",
      "clinicalTrialKeywords": "mature teratoma",
      "dedicatedColor": "Gray",
      "shortName": "BMT",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "urmm",
      "name": "Mucosal Melanoma of the Urethra",
      "clinicalTrialKeywords": "mucosal melanoma of the urethra",
      "dedicatedColor": "Yellow",
      "shortName": "URMM",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "ohnca",
      "name": "Head and Neck Carcinoma, Other",
      "clinicalTrialKeywords": "head and neck carcinoma, other",
      "dedicatedColor": "DarkRed",
      "shortName": "OHNCA",
      "parent": "head_neck"
    },
    {
      "typeOfCancerId": "cnc",
      "name": "Central Neurocytoma",
      "clinicalTrialKeywords": "central neurocytoma",
      "dedicatedColor": "Gray",
      "shortName": "CNC",
      "parent": "mnet"
    },
    {
      "typeOfCancerId": "cschw",
      "name": "Cellular Schwannoma",
      "clinicalTrialKeywords": "cellular schwannoma",
      "dedicatedColor": "Gray",
      "shortName": "CSCHW",
      "parent": "schw"
    },
    {
      "typeOfCancerId": "ptclnos",
      "name": "Peripheral T-Cell Lymphoma, NOS",
      "clinicalTrialKeywords": "peripheral t-cell lymphoma, nos",
      "dedicatedColor": "LimeGreen",
      "shortName": "PTCLNOS",
      "parent": "ptcl"
    },
    {
      "typeOfCancerId": "usc",
      "name": "Uterine Serous Carcinoma/Uterine Papillary Serous Carcinoma",
      "clinicalTrialKeywords": "uterine serous carcinoma/uterine papillary serous carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "USC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "cemu",
      "name": "Mucinous Carcinoma",
      "clinicalTrialKeywords": "mucinous carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CEMU",
      "parent": "cead"
    },
    {
      "typeOfCancerId": "scst",
      "name": "Sex Cord Stromal Tumor",
      "clinicalTrialKeywords": "sex cord stromal tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "SCST",
      "parent": "ovary"
    },
    {
      "typeOfCancerId": "epdca",
      "name": "Esophageal Poorly Differentiated Carcinoma",
      "clinicalTrialKeywords": "esophageal poorly differentiated carcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "EPDCA",
      "parent": "stomach"
    },
    {
      "typeOfCancerId": "pstt",
      "name": "Placental Site Trophoblastic Tumor",
      "clinicalTrialKeywords": "placental site trophoblastic tumor",
      "dedicatedColor": "PeachPuff",
      "shortName": "PSTT",
      "parent": "gtd"
    },
    {
      "typeOfCancerId": "vsc",
      "name": "Squamous Cell Carcinoma of the Vulva/Vagina",
      "clinicalTrialKeywords": "squamous cell carcinoma of the vulva/vagina",
      "dedicatedColor": "Black",
      "shortName": "VSC",
      "parent": "vulva"
    },
    {
      "typeOfCancerId": "saca",
      "name": "Salivary Carcinoma",
      "clinicalTrialKeywords": "salivary carcinoma",
      "dedicatedColor": "DarkRed",
      "shortName": "SACA",
      "parent": "head_neck"
    },
    {
      "typeOfCancerId": "ctaap",
      "name": "Colonic Type Adenocarcinoma of the Appendix",
      "clinicalTrialKeywords": "colonic type adenocarcinoma of the appendix",
      "dedicatedColor": "SaddleBrown",
      "shortName": "CTAAP",
      "parent": "apad"
    },
    {
      "typeOfCancerId": "cemn",
      "name": "Mesonephric Carcinoma",
      "clinicalTrialKeywords": "mesonephric carcinoma",
      "dedicatedColor": "Teal",
      "shortName": "CEMN",
      "parent": "cead"
    },
    {
      "typeOfCancerId": "lgcos",
      "name": "Low-Grade Central Osteosarcoma",
      "clinicalTrialKeywords": "low-grade central osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "LGCOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "gtd",
      "name": "Gestational Trophoblastic Disease",
      "clinicalTrialKeywords": "gestational trophoblastic disease",
      "dedicatedColor": "PeachPuff",
      "shortName": "GTD",
      "parent": "uterus"
    },
    {
      "typeOfCancerId": "phch",
      "name": "Perihilar Cholangiocarcinoma",
      "clinicalTrialKeywords": "perihilar cholangiocarcinoma",
      "dedicatedColor": "Green",
      "shortName": "PHCH",
      "parent": "chol"
    },
    {
      "typeOfCancerId": "lumec",
      "name": "Mucoepidermoid Carcinoma of the Lung",
      "clinicalTrialKeywords": "mucoepidermoid carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUMEC",
      "parent": "sgttl"
    },
    {
      "typeOfCancerId": "aml",
      "name": "Acute Myeloid Leukemia",
      "clinicalTrialKeywords": "acute myeloid leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "AML",
      "parent": "leuk"
    },
    {
      "typeOfCancerId": "grct",
      "name": "Granulosa Cell Tumor",
      "clinicalTrialKeywords": "granulosa cell tumor",
      "dedicatedColor": "LightBlue",
      "shortName": "GRCT",
      "parent": "scst"
    },
    {
      "typeOfCancerId": "nst",
      "name": "Nerve Sheath Tumor",
      "clinicalTrialKeywords": "nerve sheath tumor",
      "dedicatedColor": "Gray",
      "shortName": "NST",
      "parent": "pns"
    },
    {
      "typeOfCancerId": "sll",
      "name": "Small Lymphocytic Lymphoma",
      "clinicalTrialKeywords": "small lymphocytic lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "SLL",
      "parent": "bcl"
    },
    {
      "typeOfCancerId": "dnt",
      "name": "Dysembryoplastic Neuroepithelial Tumor",
      "clinicalTrialKeywords": "dysembryoplastic neuroepithelial tumor",
      "dedicatedColor": "Gray",
      "shortName": "DNT",
      "parent": "encg"
    },
    {
      "typeOfCancerId": "c3720",
      "name": "C3720",
      "clinicalTrialKeywords": "c3720",
      "dedicatedColor": "LimeGreen",
      "shortName": "C3720",
      "parent": "limegreen"
    },
    {
      "typeOfCancerId": "coadread",
      "name": "Colorectal Adenocarcinoma",
      "clinicalTrialKeywords": "colorectal adenocarcinoma",
      "dedicatedColor": "SaddleBrown",
      "shortName": "COADREAD",
      "parent": "bowel"
    },
    {
      "typeOfCancerId": "schw",
      "name": "Schwannoma",
      "clinicalTrialKeywords": "schwannoma",
      "dedicatedColor": "Gray",
      "shortName": "SCHW",
      "parent": "nst"
    },
    {
      "typeOfCancerId": "urca",
      "name": "Urachal Carcinoma",
      "clinicalTrialKeywords": "urachal carcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "URCA",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "sccrcc",
      "name": "Renal Clear Cell Carcinoma with Sarcomatoid Features",
      "clinicalTrialKeywords": "renal clear cell carcinoma with sarcomatoid features",
      "dedicatedColor": "Orange",
      "shortName": "SCCRCC",
      "parent": "ccrcc"
    },
    {
      "typeOfCancerId": "urcc",
      "name": "Unclassified Renal Cell Carcinoma",
      "clinicalTrialKeywords": "unclassified renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "URCC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "thme",
      "name": "Medullary Thyroid Cancer",
      "clinicalTrialKeywords": "medullary thyroid cancer",
      "dedicatedColor": "Teal",
      "shortName": "THME",
      "parent": "thyroid"
    },
    {
      "typeOfCancerId": "etc",
      "name": "Essential Thrombocythaemia",
      "clinicalTrialKeywords": "essential thrombocythaemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "ETC",
      "parent": "mpn"
    },
    {
      "typeOfCancerId": "mdlc",
      "name": "Breast Mixed Ductal and Lobular Carcinoma",
      "clinicalTrialKeywords": "breast mixed ductal and lobular carcinoma",
      "dedicatedColor": "HotPink",
      "shortName": "MDLC",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "tmeso",
      "name": "Testicular Mesothelioma",
      "clinicalTrialKeywords": "testicular mesothelioma",
      "dedicatedColor": "Red",
      "shortName": "TMESO",
      "parent": "testis"
    },
    {
      "typeOfCancerId": "fdcs",
      "name": "Follicular Dendritic Cell Sarcoma",
      "clinicalTrialKeywords": "follicular dendritic cell sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "FDCS",
      "parent": "dcs"
    },
    {
      "typeOfCancerId": "all",
      "name": "Acute Lymphoid Leukemia",
      "clinicalTrialKeywords": "acute lymphoid leukemia",
      "dedicatedColor": "LightSalmon",
      "shortName": "ALL",
      "parent": "leuk"
    },
    {
      "typeOfCancerId": "ddchdm",
      "name": "Dedifferentiated Chordoma",
      "clinicalTrialKeywords": "dedifferentiated chordoma",
      "dedicatedColor": "White",
      "shortName": "DDCHDM",
      "parent": "chdm"
    },
    {
      "typeOfCancerId": "celi",
      "name": "Cervical Leiomyosarcoma",
      "clinicalTrialKeywords": "cervical leiomyosarcoma",
      "dedicatedColor": "Teal",
      "shortName": "CELI",
      "parent": "cervix"
    },
    {
      "typeOfCancerId": "uus",
      "name": "Undifferentiated Uterine Sarcoma",
      "clinicalTrialKeywords": "undifferentiated uterine sarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UUS",
      "parent": "usarc"
    },
    {
      "typeOfCancerId": "psc",
      "name": "Serous Cystadenoma of the Pancreas",
      "clinicalTrialKeywords": "serous cystadenoma of the pancreas",
      "dedicatedColor": "Purple",
      "shortName": "PSC",
      "parent": "pact"
    },
    {
      "typeOfCancerId": "ess",
      "name": "Endometrial Stromal Sarcoma",
      "clinicalTrialKeywords": "endometrial stromal sarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "ESS",
      "parent": "usarc"
    },
    {
      "typeOfCancerId": "mchscns",
      "name": "Mesenchymal Chondrosarcoma of the CNS",
      "clinicalTrialKeywords": "mesenchymal chondrosarcoma of the cns",
      "dedicatedColor": "Gray",
      "shortName": "MCHSCNS",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "plsmeso",
      "name": "Pleural Mesothelioma, Sarcomatoid Type",
      "clinicalTrialKeywords": "pleural mesothelioma, sarcomatoid type",
      "dedicatedColor": "Blue",
      "shortName": "PLSMESO",
      "parent": "plmeso"
    },
    {
      "typeOfCancerId": "hmbl",
      "name": "Hemangioblastoma",
      "clinicalTrialKeywords": "hemangioblastoma",
      "dedicatedColor": "Gray",
      "shortName": "HMBL",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "mrt",
      "name": "Rhabdoid Cancer",
      "clinicalTrialKeywords": "rhabdoid cancer",
      "dedicatedColor": "Orange",
      "shortName": "MRT",
      "parent": "wt"
    },
    {
      "typeOfCancerId": "voec",
      "name": "Embryonal Carcinoma",
      "clinicalTrialKeywords": "embryonal carcinoma",
      "dedicatedColor": "Black",
      "shortName": "VOEC",
      "parent": "vgct"
    },
    {
      "typeOfCancerId": "uuc",
      "name": "Uterine Undifferentiated Carcinoma",
      "clinicalTrialKeywords": "uterine undifferentiated carcinoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "UUC",
      "parent": "ucec"
    },
    {
      "typeOfCancerId": "cpp",
      "name": "Choroid Plexus Papilloma",
      "clinicalTrialKeywords": "choroid plexus papilloma",
      "dedicatedColor": "Gray",
      "shortName": "CPP",
      "parent": "cpt"
    },
    {
      "typeOfCancerId": "hist",
      "name": "Histiocytosis",
      "clinicalTrialKeywords": "histiocytosis",
      "dedicatedColor": "LightSalmon",
      "shortName": "HIST",
      "parent": "blood"
    },
    {
      "typeOfCancerId": "thpd",
      "name": "Poorly Differentiated Thyroid Cancer",
      "clinicalTrialKeywords": "poorly differentiated thyroid cancer",
      "dedicatedColor": "Teal",
      "shortName": "THPD",
      "parent": "thyroid"
    },
    {
      "typeOfCancerId": "cpt",
      "name": "Choroid Plexus Tumor",
      "clinicalTrialKeywords": "choroid plexus tumor",
      "dedicatedColor": "Gray",
      "shortName": "CPT",
      "parent": "brain"
    },
    {
      "typeOfCancerId": "other",
      "name": "Other",
      "clinicalTrialKeywords": "other",
      "dedicatedColor": "Black",
      "shortName": "OTHER",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "prne",
      "name": "Prostate Neuroendocrine Carcinoma",
      "clinicalTrialKeywords": "prostate neuroendocrine carcinoma",
      "dedicatedColor": "Cyan",
      "shortName": "PRNE",
      "parent": "prostate"
    },
    {
      "typeOfCancerId": "thpa",
      "name": "Papillary Thyroid Cancer",
      "clinicalTrialKeywords": "papillary thyroid cancer",
      "dedicatedColor": "Teal",
      "shortName": "THPA",
      "parent": "thyroid"
    },
    {
      "typeOfCancerId": "bpt",
      "name": "Benign Phyllodes Tumor of the Breast",
      "clinicalTrialKeywords": "benign phyllodes tumor of the breast",
      "dedicatedColor": "HotPink",
      "shortName": "BPT",
      "parent": "pt"
    },
    {
      "typeOfCancerId": "mrc",
      "name": "Renal Medullary Carcinoma",
      "clinicalTrialKeywords": "renal medullary carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "MRC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "wdls",
      "name": "Well-Differentiated Liposarcoma",
      "clinicalTrialKeywords": "well-differentiated liposarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "WDLS",
      "parent": "lipo"
    },
    {
      "typeOfCancerId": "grc",
      "name": "Gastric Remnant Adenocarcinoma",
      "clinicalTrialKeywords": "gastric remnant adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "GRC",
      "parent": "egc"
    },
    {
      "typeOfCancerId": "idcs",
      "name": "Interdigitating Dendritic Cell Sarcoma",
      "clinicalTrialKeywords": "interdigitating dendritic cell sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "IDCS",
      "parent": "dcs"
    },
    {
      "typeOfCancerId": "lymph",
      "name": "Lymph",
      "clinicalTrialKeywords": "lymph",
      "dedicatedColor": "LimeGreen",
      "shortName": "LYMPH",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "ccprc",
      "name": "Clear Cell Papillary Renal Cell Carcinoma",
      "clinicalTrialKeywords": "clear cell papillary renal cell carcinoma",
      "dedicatedColor": "Orange",
      "shortName": "CCPRC",
      "parent": "nccrcc"
    },
    {
      "typeOfCancerId": "epm",
      "name": "Ependymoma",
      "clinicalTrialKeywords": "ependymoma",
      "dedicatedColor": "Gray",
      "shortName": "EPM",
      "parent": "epmt"
    },
    {
      "typeOfCancerId": "c7528",
      "name": "C7528",
      "clinicalTrialKeywords": "c7528",
      "dedicatedColor": "LimeGreen",
      "shortName": "C7528",
      "parent": "limegreen"
    },
    {
      "typeOfCancerId": "ope",
      "name": "Polyembryoma",
      "clinicalTrialKeywords": "polyembryoma",
      "dedicatedColor": "LightBlue",
      "shortName": "OPE",
      "parent": "ogct"
    },
    {
      "typeOfCancerId": "mstad",
      "name": "Mucinous Stomach Adenocarcinoma",
      "clinicalTrialKeywords": "mucinous stomach adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "MSTAD",
      "parent": "stad"
    },
    {
      "typeOfCancerId": "ape",
      "name": "Anaplastic Ependymoma",
      "clinicalTrialKeywords": "anaplastic ependymoma",
      "dedicatedColor": "Gray",
      "shortName": "APE",
      "parent": "epmt"
    },
    {
      "typeOfCancerId": "nlphl",
      "name": "Nodular Lymphocyte-Predominant Hodgkin Lymphoma",
      "clinicalTrialKeywords": "nodular lymphocyte-predominant hodgkin lymphoma",
      "dedicatedColor": "LimeGreen",
      "shortName": "NLPHL",
      "parent": "hl"
    },
    {
      "typeOfCancerId": "luad",
      "name": "Lung Adenocarcinoma",
      "clinicalTrialKeywords": "lung adenocarcinoma",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUAD",
      "parent": "nsclc"
    },
    {
      "typeOfCancerId": "mpt",
      "name": "Malignant Phyllodes Tumor of the Breast",
      "clinicalTrialKeywords": "malignant phyllodes tumor of the breast",
      "dedicatedColor": "HotPink",
      "shortName": "MPT",
      "parent": "pt"
    },
    {
      "typeOfCancerId": "leclc",
      "name": "Lymphoepithelioma-like Carcinoma of the Lung",
      "clinicalTrialKeywords": "lymphoepithelioma-like carcinoma of the lung",
      "dedicatedColor": "Gainsboro",
      "shortName": "LECLC",
      "parent": "lclc"
    },
    {
      "typeOfCancerId": "soc",
      "name": "Serous Ovarian Cancer",
      "clinicalTrialKeywords": "serous ovarian cancer",
      "dedicatedColor": "LightBlue",
      "shortName": "SOC",
      "parent": "ovt"
    },
    {
      "typeOfCancerId": "pstad",
      "name": "Papillary Stomach Adenocarcinoma",
      "clinicalTrialKeywords": "papillary stomach adenocarcinoma",
      "dedicatedColor": "LightSkyBlue",
      "shortName": "PSTAD",
      "parent": "stad"
    },
    {
      "typeOfCancerId": "plemeso",
      "name": "Pleural Mesothelioma, Epithelioid Type",
      "clinicalTrialKeywords": "pleural mesothelioma, epithelioid type",
      "dedicatedColor": "Blue",
      "shortName": "PLEMESO",
      "parent": "plmeso"
    },
    {
      "typeOfCancerId": "anm",
      "name": "Anaplastic Meningioma",
      "clinicalTrialKeywords": "anaplastic meningioma",
      "dedicatedColor": "Gray",
      "shortName": "ANM",
      "parent": "mngt"
    },
    {
      "typeOfCancerId": "lgess",
      "name": "Low-Grade Endometrial Stromal Sarcoma",
      "clinicalTrialKeywords": "low-grade endometrial stromal sarcoma",
      "dedicatedColor": "PeachPuff",
      "shortName": "LGESS",
      "parent": "ess"
    },
    {
      "typeOfCancerId": "blca",
      "name": "Bladder Urothelial Carcinoma",
      "clinicalTrialKeywords": "bladder urothelial carcinoma",
      "dedicatedColor": "Yellow",
      "shortName": "BLCA",
      "parent": "bladder"
    },
    {
      "typeOfCancerId": "dfsp",
      "name": "Dermatofibrosarcoma Protuberans",
      "clinicalTrialKeywords": "dermatofibrosarcoma protuberans",
      "dedicatedColor": "Black",
      "shortName": "DFSP",
      "parent": "skin"
    },
    {
      "typeOfCancerId": "prnet",
      "name": "Primary Neuroepithelial Tumor",
      "clinicalTrialKeywords": "primary neuroepithelial tumor",
      "dedicatedColor": "Gray",
      "shortName": "PRNET",
      "parent": "mbt"
    },
    {
      "typeOfCancerId": "c0020981",
      "name": "C0020981",
      "clinicalTrialKeywords": "c0020981",
      "dedicatedColor": "LimeGreen",
      "shortName": "C0020981",
      "parent": "c7528"
    },
    {
      "typeOfCancerId": "brcanos",
      "name": "Breast Invasive Cancer, NOS",
      "clinicalTrialKeywords": "breast invasive cancer, nos",
      "dedicatedColor": "HotPink",
      "shortName": "BRCANOS",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "adnos",
      "name": "Adenocarcinoma, NOS",
      "clinicalTrialKeywords": "adenocarcinoma, nos",
      "dedicatedColor": "Black",
      "shortName": "ADNOS",
      "parent": "cup"
    },
    {
      "typeOfCancerId": "lipo",
      "name": "Liposarcoma",
      "clinicalTrialKeywords": "liposarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "LIPO",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "luas",
      "name": "Lung Adenosquamous Carcinoma",
      "clinicalTrialKeywords": "lung adenosquamous carcinoma",
      "dedicatedColor": "Gainsboro",
      "shortName": "LUAS",
      "parent": "nsclc"
    },
    {
      "typeOfCancerId": "syns",
      "name": "Synovial Sarcoma",
      "clinicalTrialKeywords": "synovial sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "SYNS",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "nsclc",
      "name": "Non-Small Cell Lung Cancer",
      "clinicalTrialKeywords": "non-small cell lung cancer",
      "dedicatedColor": "Gainsboro",
      "shortName": "NSCLC",
      "parent": "lung"
    },
    {
      "typeOfCancerId": "mpc",
      "name": "Myopericytoma",
      "clinicalTrialKeywords": "myopericytoma",
      "dedicatedColor": "LightYellow",
      "shortName": "MPC",
      "parent": "soft_tissue"
    },
    {
      "typeOfCancerId": "hdcs",
      "name": "Histiocytic Dendritic Cell Sarcoma",
      "clinicalTrialKeywords": "histiocytic dendritic cell sarcoma",
      "dedicatedColor": "LightYellow",
      "shortName": "HDCS",
      "parent": "dcs"
    },
    {
      "typeOfCancerId": "acbc",
      "name": "Adenoid Cystic Breast Cancer",
      "clinicalTrialKeywords": "adenoid cystic breast cancer",
      "dedicatedColor": "HotPink",
      "shortName": "ACBC",
      "parent": "brca"
    },
    {
      "typeOfCancerId": "mpe",
      "name": "Myxopapillary Ependymoma",
      "clinicalTrialKeywords": "myxopapillary ependymoma",
      "dedicatedColor": "Gray",
      "shortName": "MPE",
      "parent": "epmt"
    },
    {
      "typeOfCancerId": "kidney",
      "name": "Kidney",
      "clinicalTrialKeywords": "kidney",
      "dedicatedColor": "Orange",
      "shortName": "KIDNEY",
      "parent": "tissue"
    },
    {
      "typeOfCancerId": "scos",
      "name": "Small Cell Osteosarcoma",
      "clinicalTrialKeywords": "small cell osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "SCOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "vpscc",
      "name": "Verrucous Penile Squamous Cell Carcinoma",
      "clinicalTrialKeywords": "verrucous penile squamous cell carcinoma",
      "dedicatedColor": "Blue",
      "shortName": "VPSCC",
      "parent": "pscc"
    },
    {
      "typeOfCancerId": "desm",
      "name": "Desmoplastic Melanoma",
      "clinicalTrialKeywords": "desmoplastic melanoma",
      "dedicatedColor": "Black",
      "shortName": "DESM",
      "parent": "mel"
    },
    {
      "typeOfCancerId": "ampca",
      "name": "Ampullary Carcinoma",
      "clinicalTrialKeywords": "ampullary carcinoma",
      "dedicatedColor": "Purple",
      "shortName": "AMPCA",
      "parent": "ampulla_of_vater"
    },
    {
      "typeOfCancerId": "mpn",
      "name": "Myeloproliferative Neoplasm",
      "clinicalTrialKeywords": "myeloproliferative neoplasm",
      "dedicatedColor": "LightSalmon",
      "shortName": "MPN",
      "parent": "blood"
    },
    {
      "typeOfCancerId": "teos",
      "name": "Telangiectatic Osteosarcoma",
      "clinicalTrialKeywords": "telangiectatic osteosarcoma",
      "dedicatedColor": "White",
      "shortName": "TEOS",
      "parent": "os"
    },
    {
      "typeOfCancerId": "bcca",
      "name": "Choriocarcinoma",
      "clinicalTrialKeywords": "choriocarcinoma",
      "dedicatedColor": "Gray",
      "shortName": "BCCA",
      "parent": "bgct"
    },
    {
      "typeOfCancerId": "nfib",
      "name": "Neurofibroma",
      "clinicalTrialKeywords": "neurofibroma",
      "dedicatedColor": "Gray",
      "shortName": "NFIB",
      "parent": "nst"
    }
  ],
  "studies": [
    {
      "cancerStudyIdentifier": "blca_dfarber_mskcc_2014",
      "typeOfCancerId": "blca",
      "name": "Bladder Urothelial Carcinoma (Dana Farber & MSKCC, Cancer Discov 2014)",
      "shortName": "Bladder (DFCI/MSKCC 2014)",
      "description": "Whole exome sequencing of 50 patients with muscle invasive urothelial carcinoma",
      "publicStudy": true,
      "pmid": "25096233",
      "citation": "Van Allen et al.,Cancer Discov 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 50
    },
    {
      "cancerStudyIdentifier": "brca_bccrc_xenograft_2014",
      "typeOfCancerId": "brca",
      "name": "Breast cancer patient xenografts (British Columbia, Nature 2014)",
      "shortName": "Breast (BCCRC Xenograft)",
      "description": "Dynamics of genomic clones in breast cancer patient xenografts.",
      "publicStudy": true,
      "pmid": "25470049",
      "citation": "Eirew et al. Nature 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 116
    },
    {
      "cancerStudyIdentifier": "kirc_bgi",
      "typeOfCancerId": "ccrcc",
      "name": "Kidney Renal Clear Cell Carcinoma (BGI, Nat Genet 2012)",
      "shortName": "ccRCC (BGI 2012)",
      "description": "Comprehensive sequencing of 98 clear cell kidney cancer samples. Generated by BGI-Shenzhen.",
      "publicStudy": true,
      "pmid": "22138691",
      "citation": "Guo et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 98
    },
    {
      "cancerStudyIdentifier": "chol_jhu_2013",
      "typeOfCancerId": "chol",
      "name": "Intrahepatic Cholangiocarcinoma (Johns Hopkins University, Nat Genet 2013)",
      "shortName": "Cholangiocarcinoma (JHU)",
      "description": "Exome Sequencing of 32 intrahepatic cholangiocarcinoma cases and 8 gall bladder carcinoma cases.",
      "publicStudy": true,
      "pmid": "24185509",
      "citation": "Jiao et al. Nat Genet 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 40
    },
    {
      "cancerStudyIdentifier": "chol_nus_2012",
      "typeOfCancerId": "chol",
      "name": "Cholangiocarcinoma (National University of Singapore, Nat Genet 2012)",
      "shortName": "Cholangiocarcinoma (NUS)",
      "description": "Exome Sequencing for Opisthorchis viverrini-related cholangiocarcinoma in 8 O.viverrini-related tumors and matched normal tissue.",
      "publicStudy": true,
      "pmid": "22561520",
      "citation": "Ong et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 8
    },
    {
      "cancerStudyIdentifier": "cscc_dfarber_2015",
      "typeOfCancerId": "cscc",
      "name": "Cutaneous squamous cell carcinoma (DFCI, Clin Cancer Res 2015)",
      "shortName": "CSCC (DFCI 2015)",
      "description": "Targeted sequencing of 504 cancer-associated genes in 29 cutaneous squamous cell carcinoma samples",
      "publicStudy": true,
      "pmid": "25589618",
      "citation": "Li et al, Clin Cancer Res 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 29
    },
    {
      "cancerStudyIdentifier": "desm_broad_2015",
      "typeOfCancerId": "desm",
      "name": "Desmoplastic Melanoma (Broad Institute, Nat Genet 2015)",
      "shortName": "DESM (Broad 2015)",
      "description": "Mutation data from Exome/Whole Genome sequencing of 20 desmoplastic melanoma cases.",
      "publicStudy": true,
      "pmid": "26343386",
      "citation": "Shain et al. Nat Genet 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 20
    },
    {
      "cancerStudyIdentifier": "escc_ucla_2014",
      "typeOfCancerId": "escc",
      "name": "Esophageal Squamous Cell Carcinoma (UCLA, Nat Genet 2014)",
      "shortName": "ESCC (UCLA 2014)",
      "description": "Whole exome sequencing (WXS) or targeted deep sequencing (TDS) of 139 paired esophageal squamous cell carcinoma patients.",
      "publicStudy": true,
      "pmid": "24686850",
      "citation": "Lin et al., Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 137
    },
    {
      "cancerStudyIdentifier": "lihc_riken",
      "typeOfCancerId": "hcc",
      "name": "Liver Hepatocellular Carcinoma (RIKEN, Nat Genet 2012)",
      "shortName": "Liver (RIKEN)",
      "description": "Whole-genome sequencing of 27 hepatocellular carcinoma samples from RIKEN.",
      "publicStudy": true,
      "pmid": "22634756",
      "citation": "Fujimoto et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 21
    },
    {
      "cancerStudyIdentifier": "luad_mskcc_2015",
      "typeOfCancerId": "luad",
      "name": "Lung Adenocarcinoma (MSKCC 2015)",
      "shortName": "Lung adeno (MSKCC)",
      "description": "Whole-exome sequencing of non small cell lung cancers treated with pembrolizumab",
      "publicStudy": true,
      "pmid": "25765070",
      "citation": "Rizvi et al., Science 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 34
    },
    {
      "cancerStudyIdentifier": "luad_tsp",
      "typeOfCancerId": "luad",
      "name": "Lung Adenocarcinoma (TSP, Nature 2008)",
      "shortName": "Lung adeno (TSP)",
      "description": "Targeted sequencing of 163 lung adenocarcinoma samples. Generated by WashU/Broad.",
      "publicStudy": true,
      "pmid": "18948947",
      "citation": "Ding et al. Nature 2008",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 163
    },
    {
      "cancerStudyIdentifier": "sclc_clcgp",
      "typeOfCancerId": "sclc",
      "name": "Small Cell Lung Cancer (CLCGP, Nat Genet 2012)",
      "shortName": "Small Cell Lung (CLCGP)",
      "description": "Comprehensive profiling of 29 small cell lung cancer samples. Generated by the Clinical Lung Cancer Genome Project.",
      "publicStudy": true,
      "pmid": "22941188",
      "citation": "Peifer et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 29
    },
    {
      "cancerStudyIdentifier": "mbl_broad_2012",
      "typeOfCancerId": "mbl",
      "name": "Medulloblastoma (Broad, Nature 2012)",
      "shortName": "MBL (Broad)",
      "description": "Comprehensive profiling of 92 medulloblastoma samples from the Broad Institute.",
      "publicStudy": true,
      "pmid": "22820256",
      "citation": "Pugh et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 92
    },
    {
      "cancerStudyIdentifier": "mbl_icgc",
      "typeOfCancerId": "mbl",
      "name": "Medulloblastoma (ICGC, Nature 2012)",
      "shortName": "MBL (ICGC)",
      "description": "125 Medulloblastoma tumor / normal pairs. ICGC.",
      "publicStudy": true,
      "pmid": "22832583",
      "citation": "Jones et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 125
    },
    {
      "cancerStudyIdentifier": "mbl_pcgp",
      "typeOfCancerId": "mbl",
      "name": "Medulloblastoma (PCGP, Nature 2012)",
      "shortName": "MBL (PCGP)",
      "description": "Whole genome sequencing of 37 medulloblastoma samples from the Pediatric Cancer Genome Project (PCGP), a joint project by St. Jude Children's Research Hospital and Washington University.",
      "publicStudy": true,
      "pmid": "22722829",
      "citation": "Robinson et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 37
    },
    {
      "cancerStudyIdentifier": "nbl_amc_2012",
      "typeOfCancerId": "nbl",
      "name": "Neuroblastoma (AMC Amsterdam, Nature 2012)",
      "shortName": "NBL (AMC)",
      "description": "Whole genome sequencing of 87 neuroblastoma samples from the Academic Medical Center, Amsterdam.",
      "publicStudy": true,
      "pmid": "22367537",
      "citation": "Molenaar et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 87
    },
    {
      "cancerStudyIdentifier": "npc_nusingapore",
      "typeOfCancerId": "npc",
      "name": "Nasopharyngeal Carcinoma (Singapore, Nat Genet 2014)",
      "shortName": "NPC (Singapore)",
      "description": "Whole genome sequencing of 56 NPC tumor / normal pairs. Generated by the Cancer Science Institute of Singapore, National University of Singapore.",
      "publicStudy": true,
      "pmid": "24952746",
      "citation": "Lin et al., Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 56
    },
    {
      "cancerStudyIdentifier": "paac_jhu_2014",
      "typeOfCancerId": "paac",
      "name": "Acinar Cell Carcinoma of the Pancreas (Johns Hopkins, J Pathol 2014)",
      "shortName": "PAAC (JHU)",
      "description": "Mutation data from whole exome sequencing of 23 surgically resected pancreatic carcinomas with acinar differentiation.",
      "publicStudy": true,
      "pmid": "24293293",
      "citation": "Jial et al. J Pathol 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 23
    },
    {
      "cancerStudyIdentifier": "paad_icgc",
      "typeOfCancerId": "paad",
      "name": "Pancreatic Adenocarcinoma (ICGC, Nature 2012)",
      "shortName": "Pancreas (ICGC)",
      "description": "Comprehensive profiling of 99 pancreatic cancer samples. Generated by ICGC.",
      "publicStudy": true,
      "pmid": "23103869",
      "citation": "Biankin et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 99
    },
    {
      "cancerStudyIdentifier": "paad_utsw_2015",
      "typeOfCancerId": "paad",
      "name": "Pancreatic Cancer (UTSW, Nat Commun 2015)",
      "shortName": "Pancreas (UTSW)",
      "description": "Whole exome sequencing of 109 micro-dissected pancreatic cancer cases and normal control tissue.",
      "publicStudy": true,
      "pmid": "25855536",
      "citation": "Witkiewicz et al. Nat Commun 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 109
    },
    {
      "cancerStudyIdentifier": "pcnsl_mayo_2015",
      "typeOfCancerId": "pcnsl",
      "name": "Primary Central Nervous System Lymphoma (Mayo Clinic, Clin Cancer Res 2015)",
      "shortName": "PCNSL (Mayo Clinic)",
      "description": "Mutation data from whole exome sequencing (WXS) of 10 immunocompetent primary central nervous system lymphoma (PCNSL) samples.",
      "publicStudy": true,
      "pmid": "25991819",
      "citation": "Braggio E et al, Clin Cancer Res 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 10
    },
    {
      "cancerStudyIdentifier": "rms_nih_2014",
      "typeOfCancerId": "rms",
      "name": "Rhabdomyosarcoma (NIH, Cancer Discov 2014)",
      "shortName": "RMS (NIH)",
      "description": "Mutation data from WGS and/or WXS of 43 rhabdomyosarcoma samples.",
      "publicStudy": true,
      "pmid": "24436047",
      "citation": "Shern et al. Cancer Discov 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 43
    },
    {
      "cancerStudyIdentifier": "brca_broad",
      "typeOfCancerId": "brca",
      "name": "Breast Invasive Carcinoma (Broad, Nature 2012)",
      "shortName": "Breast (Broad 2012)",
      "description": "Comprehensive profiling of 103 breast cancer samples. Generated by the Broad Institute.",
      "publicStudy": true,
      "pmid": "22722202",
      "citation": "Banerji et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 103
    },
    {
      "cancerStudyIdentifier": "kich_tcga_pub",
      "typeOfCancerId": "chrcc",
      "name": "Kidney Chromophobe (TCGA, Cancer Cell 2014)",
      "shortName": "chRCC (TCGA)",
      "description": "TCGA Kidney Chromophobe; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/tcga/tcgaCancerDetails.jsp?diseaseType=KICH&diseaseName=Kidney Chromophobe\">NCI</A>.",
      "publicStudy": true,
      "pmid": "25155756",
      "citation": "TCGA, Cancer Cell 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 66
    },
    {
      "cancerStudyIdentifier": "coadread_genentech",
      "typeOfCancerId": "coadread",
      "name": "Colorectal Adenocarcinoma (Genentech, Nature 2012)",
      "shortName": "Colorectal (Genentech)",
      "description": "Comprehensive profiling of 72 colon cancer samples. Generated by Genentech.",
      "publicStudy": true,
      "pmid": "22895193",
      "citation": "Seshagiri et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 72
    },
    {
      "cancerStudyIdentifier": "coadread_mskcc",
      "typeOfCancerId": "coadread",
      "name": "Colorectal Adenocarcinoma Triplets (MSKCC, Genome Biol 2014)",
      "shortName": "Colorectal (MSKCC)",
      "description": "Colon Trios data from 69 Patients each with a  primary and metastatic tumor. (Primary / Met) (David Solit / Evi Vakiani / Michael Berger, MSKCC)",
      "publicStudy": true,
      "pmid": "25164765",
      "citation": "Brannon et al. Genome Biol 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 138
    },
    {
      "cancerStudyIdentifier": "esca_broad",
      "typeOfCancerId": "esca",
      "name": "Esophageal Adenocarcinoma (Broad, Nat Genet 2013)",
      "shortName": "Esophagus (Broad)",
      "description": "Comprehensive profiling of 149 esophageal adenocarcinoma samples from the Broad Institute.",
      "publicStudy": true,
      "pmid": "23525077",
      "citation": "Dulak et al. Nat Genet 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 146
    },
    {
      "cancerStudyIdentifier": "es_iocurie_2014",
      "typeOfCancerId": "es",
      "name": "Ewing Sarcoma (Institut Cuire, Cancer Discov 2014)",
      "shortName": "Ewing Sarcoma (Institut Curie)",
      "description": "Mutation data from whole-genome sequencing of 112 Ewing sarcoma samples and matched germ line DNA. <a href=\"http://cancerdiscovery.aacrjournals.org/content/4/11/1342/suppl/DC1\">",
      "publicStudy": true,
      "pmid": "25223734",
      "citation": "Tirode et al. Cancer Discov. 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 112
    },
    {
      "cancerStudyIdentifier": "gbc_shanghai_2014",
      "typeOfCancerId": "gbc",
      "name": "Gallbladder Carcinoma (Shanghai, Nat Genet 2014)",
      "shortName": "GBC (Shanghai)",
      "description": "Mutation data from whole exome sequencing of 32 gallbladder carcinoma tumors with paired normals",
      "publicStudy": true,
      "pmid": "24997986",
      "citation": "Maolan Li et al, Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 32
    },
    {
      "cancerStudyIdentifier": "lgg_ucsf_2014",
      "typeOfCancerId": "difg",
      "name": "Low-Grade Gliomas (UCSF, Science 2014)",
      "shortName": "Glioma (UCSF)",
      "description": "Mutation data from whole exome sequencing of 23 grade II glioma patients.",
      "publicStudy": true,
      "pmid": "24336570",
      "citation": "Johnson BE et al, Science 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 61
    },
    {
      "cancerStudyIdentifier": "hnsc_broad",
      "typeOfCancerId": "hnsc",
      "name": "Head and Neck Squamous Cell Carcinoma (Broad, Science 2011)",
      "shortName": "Head & neck (Broad)",
      "description": "Comprehensive profiling of 74 head and neck squamous cell carcinoma samples from the Broad Institute.",
      "publicStudy": true,
      "pmid": "21798893",
      "citation": "Stransky et al. Science 2011",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 74
    },
    {
      "cancerStudyIdentifier": "lgggbm_tcga_pub",
      "typeOfCancerId": "difg",
      "name": "Merged Cohort of LGG and GBM (TCGA, Cell 2016)",
      "shortName": "LGG-GBM (TCGA 2016)",
      "description": "Whole-exome sequencing from TCGA LGG and GBM cases",
      "publicStudy": true,
      "pmid": "26824661",
      "citation": "TCGA, Cell 2016",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 1102
    },
    {
      "cancerStudyIdentifier": "sclc_ucologne_2015",
      "typeOfCancerId": "sclc",
      "name": "Small Cell Lung Cancer (U Cologne, Nature 2015)",
      "shortName": "Small Cell Lung (UCOLOGNE)",
      "description": "Comprehensive WGS profiling of 110 human SCLC specimens.",
      "publicStudy": true,
      "pmid": "26168399",
      "citation": "George et al. Nature 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 110
    },
    {
      "cancerStudyIdentifier": "skcm_broad",
      "typeOfCancerId": "skcm",
      "name": "Skin Cutaneous Melanoma (Broad, Cell 2012)",
      "shortName": "Melanoma (Broad)",
      "description": "Comprehensive profiling of 121 melanoma samples. Generated by the Broad Institute.",
      "publicStudy": true,
      "pmid": "22817889",
      "citation": "Hodis et al. Cell 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 121
    },
    {
      "cancerStudyIdentifier": "skcm_yale",
      "typeOfCancerId": "skcm",
      "name": "Skin Cutaneous Melanoma (Yale, Nat Genet 2012)",
      "shortName": "Melanoma (Yale)",
      "description": "Exome sequencing of 91 melanoma samples. Generated by Yale.",
      "publicStudy": true,
      "pmid": "22842228",
      "citation": "Krauthammer et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 91
    },
    {
      "cancerStudyIdentifier": "panet_jhu_2011",
      "typeOfCancerId": "panet",
      "name": "Pancreatic Neuroendocrine Tumors (Johns Hopkins University, Science 2011)",
      "shortName": "PANET(Johns Hopkins 2011)",
      "description": "Whole exome sequencing of 10 pancreatic neuroendocrine tumor patients. <A HREF=\"https://www.sciencemag.org/content/331/6021/1199/suppl/DC1\">",
      "publicStudy": true,
      "pmid": "21252315",
      "citation": "Jiao et al. Science 2011",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 10
    },
    {
      "cancerStudyIdentifier": "prad_tcga_pub",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma (TCGA, Cell 2015)",
      "shortName": "Prostate (TCGA 2015)",
      "description": "Integrated profiling of 333 primary prostate adenocarcinoma samples; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/docs/publications/prad_2015/\">NCI</A>.",
      "publicStudy": true,
      "pmid": "26544944",
      "citation": "TCGA, Cell 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 333
    },
    {
      "cancerStudyIdentifier": "egc_tmucih_2015",
      "typeOfCancerId": "egc",
      "name": "Gastric Adenocarcinoma (TMUCIH, PNAS 2015)",
      "shortName": "Stomach (TMUCIH 2015)",
      "description": "Whole-exome sequencing on 78 Gastric Adenocarcinoma of differing histologies and anatomic locations",
      "publicStudy": true,
      "pmid": "25583476",
      "citation": "Chen et al. PNAS 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 78
    },
    {
      "cancerStudyIdentifier": "stad_utokyo",
      "typeOfCancerId": "stad",
      "name": "Stomach Adenocarcinoma (U Tokyo, Nat Genet 2014)",
      "shortName": "Stomach (UTokyo)",
      "description": "Whole exome sequencing of 30 diffuse-type gastric adenocarcinoma samples from the University of Tokyo.",
      "publicStudy": true,
      "pmid": "24816255",
      "citation": "Kakiuchi et al. Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 30
    },
    {
      "cancerStudyIdentifier": "tet_nci_2014",
      "typeOfCancerId": "tet",
      "name": "Thymic Epithelial Tumors (NCI, Nat Genet 2014)",
      "shortName": "TET (NCI)",
      "description": "Whole exome sequencing of 28 thymic epithelial tumors.",
      "publicStudy": true,
      "pmid": "24974848",
      "citation": "Iacopo Petrini at el. Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 28
    },
    {
      "cancerStudyIdentifier": "ucs_jhu_2014",
      "typeOfCancerId": "ucs",
      "name": "Uterine Carcinosarcoma (Johns Hopkins University, Nat Commun 2014)",
      "shortName": "ucs (Johns Hopkins 2014)",
      "description": "Whole exome sequencing (WXS) of 22 uterine carcinosarcoma/uterine malignant mixed Mullerian (UCS) tumors. <A HREF=\"http://www.nature.com/ncomms/2014/140919/ncomms6006/extref/ncomms6006-s1.pdf\">",
      "publicStudy": true,
      "pmid": "25233892",
      "citation": "Jones et al. Nat Commun 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 22
    },
    {
      "cancerStudyIdentifier": "blca_bgi",
      "typeOfCancerId": "blca",
      "name": "Bladder Urothelial Carcinoma (BGI, Nat Genet 2013)",
      "shortName": "Bladder (BGI 2013)",
      "description": "Exome and whole-genome sequencing of 99 bladder cancer samples. Generated by BGI.",
      "publicStudy": true,
      "pmid": "24121792",
      "citation": "Guo et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 99
    },
    {
      "cancerStudyIdentifier": "brca_bccrc",
      "typeOfCancerId": "brca",
      "name": "Breast Invasive Carcinoma (British Columbia, Nature 2012)",
      "shortName": "Breast (BCCRC 2012)",
      "description": "Comprehensive profiling of 65 breast cancer samples. Generated by the British Columbia Cancer Research Centre.",
      "publicStudy": true,
      "pmid": "22495314",
      "citation": "Shah et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 65
    },
    {
      "cancerStudyIdentifier": "laml_tcga_pub",
      "typeOfCancerId": "aml",
      "name": "Acute Myeloid Leukemia (TCGA, NEJM 2013)",
      "shortName": "AML (TCGA pub)",
      "description": "TCGA Acute Myeloid Leukemia, analysis of 200 adult cases; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/tcga/tcgaCancerDetails.jsp?diseaseType=LAML&diseaseName=Acute%20Myeloid%20Leukemia\">NCI</A>.",
      "publicStudy": true,
      "pmid": "23634996",
      "citation": "TCGA, NEJM 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 200
    },
    {
      "cancerStudyIdentifier": "brca_sanger",
      "typeOfCancerId": "brca",
      "name": "Breast Invasive Carcinoma (Sanger, Nature 2012)",
      "shortName": "Breast (Sanger)",
      "description": "Comprehensive profiling of 100 breast cancer samples. Generated by the Sanger Institute.",
      "publicStudy": true,
      "pmid": "22722201",
      "citation": "Stephens et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 100
    },
    {
      "cancerStudyIdentifier": "cellline_ccle_broad",
      "typeOfCancerId": "mixed",
      "name": "Cancer Cell Line Encyclopedia (Novartis/Broad, Nature 2012)",
      "shortName": "CCLE (Novartis/Broad 2012)",
      "description": "Cancer Cell Line Encyclopedia from the Broad Institute and Novartis, containing 883 samples; raw data at the <A HREF=\"http://www.broadinstitute.org/ccle/data/browseData?conversationPropagation=begin\">CCLE</A>.",
      "publicStudy": true,
      "pmid": "22460905",
      "citation": "Barretina et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 1019
    },
    {
      "cancerStudyIdentifier": "chol_nccs_2013",
      "typeOfCancerId": "chol",
      "name": "Cholangiocarcinoma (National Cancer Centre of Singapore, Nat Genet 2013)",
      "shortName": "Cholangiocarcinoma (NCCS)",
      "description": "Exome sequencing of 15 cholangiocarcinoma cases from the National Cancer Centre of Singapore to study the somatic mutations.",
      "publicStudy": true,
      "pmid": "24185513",
      "citation": "Chan-on et al. Nat Genet 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 15
    },
    {
      "cancerStudyIdentifier": "escc_icgc",
      "typeOfCancerId": "escc",
      "name": "Esophageal Squamous Cell Carcinoma (ICGC, Nature 2014)",
      "shortName": "Esophagus sq (ICGC)",
      "description": "WGS and WES of 88 esophageal squamous cell carcinoma samples. Generated by ICGC.",
      "publicStudy": true,
      "pmid": "24670651",
      "citation": "Song et al. Nature 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 88
    },
    {
      "cancerStudyIdentifier": "lihc_amc_prv",
      "typeOfCancerId": "hcc",
      "name": "Liver Hepatocellular Carcinoma (AMC, Hepatology 2014)",
      "shortName": "Liver (AMC)",
      "description": "Liver Hepatocellular Carcinoma from Asan Medical Center, Korea, containing 231 samples.",
      "publicStudy": true,
      "pmid": "24798001",
      "citation": "Ahn et al. Hepatology 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 231
    },
    {
      "cancerStudyIdentifier": "skcm_broad_dfarber",
      "typeOfCancerId": "skcm",
      "name": "Melanoma (Broad/Dana Farber, Nature 2012)",
      "shortName": "Melanoma (Broad/DFCI)",
      "description": "Somatic Mutation data from 25 Whole Genome Sequenced metastatic melanoma samples",
      "publicStudy": true,
      "pmid": "22622578",
      "citation": "Berger et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 25
    },
    {
      "cancerStudyIdentifier": "mm_broad",
      "typeOfCancerId": "mm",
      "name": "Multiple Myeloma (Broad, Cancer Cell 2014)",
      "shortName": "MM (Broad)",
      "description": "Exome sequencing of 205 multiple myeloma samples.",
      "publicStudy": true,
      "pmid": "24434212",
      "citation": "Lohr et al. Cancer Cell 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 205
    },
    {
      "cancerStudyIdentifier": "cellline_nci60",
      "typeOfCancerId": "mixed",
      "name": "NCI-60 Cell Lines (NCI, Cancer Res. 2012)",
      "shortName": "NCI-60",
      "description": "NCI-60 cell line project; raw data at <A HREF=\"http://discover.nci.nih.gov/cellminer/loadDownload.do\">CellMiner</A>.",
      "publicStudy": true,
      "pmid": "22802077",
      "citation": "Reinhold et al., Cancer Res. 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 60
    },
    {
      "cancerStudyIdentifier": "scco_mskcc",
      "typeOfCancerId": "scco",
      "name": "Small Cell Carcinoma of the Ovary (MSKCC, Nat Genet 2014)",
      "shortName": "Ovary SC (MSKCC)",
      "description": "Targeted sequencing of 12 SCCO samples.",
      "publicStudy": true,
      "pmid": "24658004",
      "citation": "Jelinic et al. Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 12
    },
    {
      "cancerStudyIdentifier": "hnsc_jhu",
      "typeOfCancerId": "hnsc",
      "name": "Head and Neck Squamous Cell Carcinoma (Johns Hopkins, Science 2011)",
      "shortName": "Head & neck (JHU)",
      "description": "Comprehensive profiling of 32 head and neck squamous cell carcinoma samples from Johns Hopkins.",
      "publicStudy": true,
      "pmid": "21798897",
      "citation": "Agrawal et al. Science 2011",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 32
    },
    {
      "cancerStudyIdentifier": "mpnst_mskcc",
      "typeOfCancerId": "mpnst",
      "name": "Malignant Peripheral Nerve Sheath Tumor (MSKCC, Nat Genet 2014)",
      "shortName": "MPNST (MSKCC)",
      "description": "Exome profiling of 17 malignant peripheral nerve sheath tumors.",
      "publicStudy": true,
      "pmid": "25240281",
      "citation": "Lee et al. Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 15
    },
    {
      "cancerStudyIdentifier": "prad_mskcc_2014",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma CNA study (MSKCC, PNAS 2014)",
      "shortName": "Prostate (MSKCC 2014)",
      "description": "Copy-number profiling of 103 primary prostate cancer samples from MSKCC. <a href=\"http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE54691\">Raw data via GEO (GSE54691)</a>.",
      "publicStudy": true,
      "pmid": "25024180",
      "citation": "Hieronymus et al. PNAS 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 104
    },
    {
      "cancerStudyIdentifier": "stad_pfizer_uhongkong",
      "typeOfCancerId": "stad",
      "name": "Stomach Adenocarcinoma (Pfizer and UHK, Nat Genet 2014)",
      "shortName": "Stomach (Pfizer UHK)",
      "description": "Whole genome sequencing of 100 tumor-normal pairs from the University of Hong Kong and Pfizer.",
      "publicStudy": true,
      "pmid": "24816253",
      "citation": "Wang et al. Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 100
    },
    {
      "cancerStudyIdentifier": "stad_tcga_pub",
      "typeOfCancerId": "stad",
      "name": "Stomach Adenocarcinoma (TCGA, Nature 2014)",
      "shortName": "Stomach (TCGA pub)",
      "description": "TCGA Stomach Adenocarcinoma, containing 295 samples; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/docs/publications/stad_2014/\">NCI</A>.",
      "publicStudy": true,
      "pmid": "25079317",
      "citation": "TCGA, Nature 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 295
    },
    {
      "cancerStudyIdentifier": "stad_uhongkong",
      "typeOfCancerId": "stad",
      "name": "Stomach Adenocarcinoma (UHK, Nat Genet 2011)",
      "shortName": "Stomach (UHK)",
      "description": "Exome sequencing of 22 gastric cancer samples.",
      "publicStudy": true,
      "pmid": "22037554",
      "citation": "Wang et al. Nat Genet 2011",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 22
    },
    {
      "cancerStudyIdentifier": "thyroid_mskcc_2016",
      "typeOfCancerId": "thyroid",
      "name": "Poorly-Differentiated and Anaplastic Thyroid Cancers (MSKCC, JCI 2016)",
      "shortName": "Thyroid (MSKCC 2016)",
      "description": "Next generation sequencing (MSK-IMPACT) of 84 poorly-differentiated (PDTC) and 33 anaplastic thyroid cancers (ATC)",
      "publicStudy": true,
      "pmid": "26878173",
      "citation": "Landa et al. JCI 2016",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 117
    },
    {
      "cancerStudyIdentifier": "hnsc_tcga_pub",
      "typeOfCancerId": "hnsc",
      "name": "Head and Neck Squamous Cell Carcinoma (TCGA, Nature 2015)",
      "shortName": "Head & neck (TCGA pub)",
      "description": "TCGA Head and Neck Squamous Cell Carcinoma, containing 279 samples; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/tcga/tcgaCancerDetails.jsp?diseaseType=HNSC&diseaseName=Head and Neck Squamous Cell Carcinoma\">NCI</A>.",
      "publicStudy": true,
      "pmid": "25631445",
      "citation": "TCGA, Nature 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 279
    },
    {
      "cancerStudyIdentifier": "luad_broad",
      "typeOfCancerId": "luad",
      "name": "Lung Adenocarcinoma (Broad, Cell 2012)",
      "shortName": "Lung adeno (Broad)",
      "description": "Comprehensive profiling of 183 lung adenocarcinoma samples. Generated by the Broad Institute.",
      "publicStudy": true,
      "pmid": "22980975",
      "citation": "Imielinksi et al. Cell 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 183
    },
    {
      "cancerStudyIdentifier": "luad_tcga_pub",
      "typeOfCancerId": "luad",
      "name": "Lung Adenocarcinoma (TCGA, Nature 2014)",
      "shortName": "Lung adeno (TCGA pub)",
      "description": "TCGA Lung Adenocarcinoma, containing 230 samples; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/tcga/tcgaCancerDetails.jsp?diseaseType=LUAD&diseaseName=Lung Adenoarcinoma\">NCI</A>.",
      "publicStudy": true,
      "pmid": "25079552",
      "citation": "TCGA, Nature 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 230
    },
    {
      "cancerStudyIdentifier": "nccrcc_genentech_2014",
      "typeOfCancerId": "nccrcc",
      "name": "Renal Non-Clear Cell Carcinoma (Genentech, Nat Genet 2014)",
      "shortName": "nccRCC (Genentech 2014)",
      "description": "Exome sequencing of 139 Renal Non-Clear Cell Carcinoma (NCCRCC) samples.",
      "publicStudy": true,
      "pmid": "25401301",
      "citation": "Durinck et al. Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 146
    },
    {
      "cancerStudyIdentifier": "prad_broad_2013",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma (Broad/Cornell, Cell 2013)",
      "shortName": "Prostate (Broad/Cornell 2013)",
      "description": "Comprehensive profiling of 57 prostate cancer samples. Generated by Levi Garraway's lab at the Broad Institute and Mark Rubin's lab at Cornell.",
      "publicStudy": true,
      "pmid": "23622249",
      "citation": "Baca et al. Cell 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 57
    },
    {
      "cancerStudyIdentifier": "prad_mich",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma, Metastatic (Michigan, Nature 2012)",
      "shortName": "Prostate (MICH)",
      "description": "Comprehensive profiling of 61 prostate cancer samples, including 50 metastatic CRPCs and 11 high-grade localized prostate cancers. Generated by Arul Chinnaiyan's and Scott Tomlins' labs at the University of Michigan.",
      "publicStudy": true,
      "pmid": "22722839",
      "citation": "Grasso et al. Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 61
    },
    {
      "cancerStudyIdentifier": "ucec_tcga_pub",
      "typeOfCancerId": "ucec",
      "name": "Uterine Corpus Endometrial Carcinoma (TCGA, Nature 2013)",
      "shortName": "Uterine (TCGA pub)",
      "description": "TCGA Uterine Corpus Endometrial Carcinoma, containing 373 samples; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/docs/publications/ucec_2013/\">NCI</A>.",
      "publicStudy": true,
      "pmid": "23636398",
      "citation": "TCGA, Nature 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 373
    },
    {
      "cancerStudyIdentifier": "blca_tcga_pub",
      "typeOfCancerId": "blca",
      "name": "Bladder Urothelial Carcinoma (TCGA, Nature 2014)",
      "shortName": "Bladder (TCGA 2014)",
      "description": "TCGA Bladder Cancer, containing 131 samples; raw data at the NCI.",
      "publicStudy": true,
      "pmid": "24476821",
      "citation": "TCGA, Nature 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 131
    },
    {
      "cancerStudyIdentifier": "blca_mskcc_solit_2012",
      "typeOfCancerId": "blca",
      "name": "Bladder Cancer (MSKCC, JCO 2013)",
      "shortName": "Bladder (MSKCC 2012)",
      "description": "Comprehensive profiling of 97 bladder cancer samples, including targeted sequencing of 15 cancer genes. Iyer et al., JCO in press.",
      "publicStudy": true,
      "pmid": "23897969",
      "citation": "Iyer et al. JCO 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 97
    },
    {
      "cancerStudyIdentifier": "ccrcc_irc_2014",
      "typeOfCancerId": "ccrcc",
      "name": "Multiregion Sequencing of Clear Cell Renal Cell Carcinoma (IRC, Nat Genet 2014).",
      "shortName": "ccRCC (IRC)",
      "description": "Mutation data from multi region exome sequencing of 10 clear cell renal cell carcinomas (ccRCCs)",
      "publicStudy": true,
      "pmid": "24487277",
      "citation": "Gerlinger et al. Nat Genet 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 78
    },
    {
      "cancerStudyIdentifier": "kirc_tcga_pub",
      "typeOfCancerId": "ccrcc",
      "name": "Kidney Renal Clear Cell Carcinoma (TCGA, Nature 2013)",
      "shortName": "ccRCC (TCGA pub)",
      "description": "TCGA Kidney Renal Clear Cell Carcinoma, containing 499 samples; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/tcga/tcgaCancerDetails.jsp?diseaseType=KIRC&diseaseName=Kidney Renal Clear Cell Carcinoma\">NCI</A>.",
      "publicStudy": true,
      "pmid": "23792563",
      "citation": "TCGA, Nature 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 499
    },
    {
      "cancerStudyIdentifier": "gbm_tcga_pub2013",
      "typeOfCancerId": "gbm",
      "name": "Glioblastoma (TCGA, Cell 2013)",
      "shortName": "GBM (TCGA 2013)",
      "description": "<a href=\"http://cancergenome.nih.gov/\">The Cancer Genome Atlas (TCGA)</a> Glioblastoma project.<br> <a href=\"http://tcga-data.nci.nih.gov/tcga/\">Raw data via the TCGA Data Portal</a>.",
      "publicStudy": true,
      "pmid": "24120142",
      "citation": "TCGA, Cell 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 580
    },
    {
      "cancerStudyIdentifier": "lusc_tcga_pub",
      "typeOfCancerId": "lusc",
      "name": "Lung Squamous Cell Carcinoma (TCGA, Nature 2012)",
      "shortName": "Lung squ (TCGA pub)",
      "description": "<a href=\"http://cancergenome.nih.gov/\">The Cancer Genome Atlas (TCGA)</a> Lung Squamous Cell Carcinoma project. 178 cases.<br><i>Nature 2012.</i> <a href=\"https://tcga-data.nci.nih.gov/docs/publications/lusc_2012/\">Raw data via the TCGA Data Portal</a>.",
      "publicStudy": true,
      "pmid": "22960745",
      "citation": "TCGA, Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 178
    },
    {
      "cancerStudyIdentifier": "all_stjude_2015",
      "typeOfCancerId": "all",
      "name": "Infant MLL-Rearranged Acute Lymphoblastic Leukemia (St Jude, Nat Genet 2015)",
      "shortName": "ALL (St. Jude)",
      "description": "Whole genome sequencing (WGS) of 22 infant MLL-rearranged acute lymphoblastic leukemia (MLL-R ALL) cases",
      "publicStudy": true,
      "pmid": "25730765",
      "citation": "Andersson et al. Nat Genet 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 62
    },
    {
      "cancerStudyIdentifier": "ccrcc_utokyo_2013",
      "typeOfCancerId": "ccrcc",
      "name": "Clear Cell Renal Cell Carcinoma (U Tokyo, Nat Genet 2013)",
      "shortName": "ccRCC (U Tokyo)",
      "description": "Mutation data from whole genome and/or whole exome sequencing of 106 clear-cell renal cell carcinoma samples.",
      "publicStudy": true,
      "pmid": "23797736",
      "citation": "Sato et al. Nat Genet 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 106
    },
    {
      "cancerStudyIdentifier": "es_dfarber_broad_2014",
      "typeOfCancerId": "es",
      "name": "Pediatric Ewing Sarcoma (DFCI, Cancer Discov 2014)",
      "shortName": "Ewing Sarcoma (DFCI)",
      "description": "Whole exome sequencing of 96 pediatric Ewing Sarcoma tumors and 11 cell lines.",
      "publicStudy": true,
      "pmid": "25186949",
      "citation": "Brian D. Crompton et al. Cancer Discov. 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 105
    },
    {
      "cancerStudyIdentifier": "sclc_jhu",
      "typeOfCancerId": "sclc",
      "name": "Small Cell Lung Cancer (Johns Hopkins, Nat Genet 2012)",
      "shortName": "Small Cell Lung (JHU)",
      "description": "Comprehensive profiling of 36 primary human SCLC tumors and 17 matched SCLC and lymphoblastoid cell lines. Generated by Johns Hopkins.",
      "publicStudy": true,
      "pmid": "22941189",
      "citation": "Rudin et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 51
    },
    {
      "cancerStudyIdentifier": "blca_mskcc_solit_2014",
      "typeOfCancerId": "blca",
      "name": "Bladder Cancer (MSKCC, Eur Urol 2014)",
      "shortName": "Bladder (MSKCC 2014)",
      "description": "Genomic Predictors of Survival in Patients with High-grade Urothelial Carcinoma of the Bladder. Targeted sequencing of 109 tumor samples (MSKCC, European Urology 2014).",
      "publicStudy": true,
      "pmid": "25092538",
      "citation": "Kim et al. Eur Urol 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 109
    },
    {
      "cancerStudyIdentifier": "thca_tcga_pub",
      "typeOfCancerId": "thpa",
      "name": "Papillary Thyroid Carcinoma (TCGA, Cell 2014)",
      "shortName": "Thyroid (TCGA pub)",
      "description": "TCGA Papillary Thyroid Carcinoma, containing 230 samples; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/tcga/tcgaCancerDetails.jsp?diseaseType=THCA&diseaseName=Thyroid%20carcinoma\">NCI</A>.",
      "publicStudy": true,
      "pmid": "25417114",
      "citation": "TCGA, Cell 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 507
    },
    {
      "cancerStudyIdentifier": "prad_su2c_2015",
      "typeOfCancerId": "prad",
      "name": "Metastatic Prostate Cancer, SU2C/PCF Dream Team (Robinson et al., Cell 2015)",
      "shortName": "Prostate (SU2C)",
      "description": "Comprehensive analysis of 150 metastatic prostate cancer samples by the SU2C/PCF Dream Team",
      "publicStudy": true,
      "citation": "Robinson et al. Cell. In press.",
      "groups": "",
      "status": 0,
      "allSampleCount": 150
    },
    {
      "cancerStudyIdentifier": "coadread_tcga_pub",
      "typeOfCancerId": "coadread",
      "name": "Colorectal Adenocarcinoma (TCGA, Nature 2012)",
      "shortName": "Colorectal (TCGA pub)",
      "description": "<a href=\"http://cancergenome.nih.gov/\">The Cancer Genome Atlas (TCGA)</a> Colorectal Cancer project. <br><i>Nature 2012.</i> <a href=\"https://tcga-data.nci.nih.gov/docs/publications/coadread_2012/\">Raw data via the TCGA Data Portal</a>.",
      "publicStudy": true,
      "pmid": "22810696",
      "citation": "TCGA, Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 276
    },
    {
      "cancerStudyIdentifier": "ov_tcga_pub",
      "typeOfCancerId": "hgsoc",
      "name": "Ovarian Serous Cystadenocarcinoma (TCGA, Nature 2011)",
      "shortName": "Ovarian (TCGA pub)",
      "description": "<a href=\"http://cancergenome.nih.gov/\">The Cancer Genome Atlas (TCGA)</a> Serous Ovarian Cancer project. 489 cases.<br> <a href=\"https://tcga-data.nci.nih.gov/docs/publications/ov_2011/\">Raw data via the TCGA Data Portal</a>.",
      "publicStudy": true,
      "pmid": "21720365",
      "citation": "TCGA, Nature 2011",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 557
    },
    {
      "cancerStudyIdentifier": "sarc_mskcc",
      "typeOfCancerId": "soft_tissue",
      "name": "Sarcoma (MSKCC/Broad, Nat Genet 2010)",
      "shortName": "Sarcoma (MSKCC)",
      "description": "The Sarcoma Genome Project, <a href=\"http://www.mskcc.org/\">MSKCC</a> and <a href=\"http://www.broadinstitute.org/\">The Broad Institute</a>. 207 high-grade adult soft tissue sarcomas across seven subtypes of disease.<br> <a href=\"http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE21124\">Raw data via GEO (GSE21124)</a>.",
      "publicStudy": true,
      "pmid": "20601955",
      "citation": "Barretina et al. Nat Genet 2010",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 207
    },
    {
      "cancerStudyIdentifier": "prad_broad",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma (Broad/Cornell, Nat Genet 2012)",
      "shortName": "Prostate (Broad/Cornell 2012)",
      "description": "Comprehensive profiling of 112 prostate cancer samples. Generated by Levi Garraway's lab at the Broad Institute and Mark Rubin's lab at Cornell.",
      "publicStudy": true,
      "pmid": "22610119",
      "citation": "Barbieri et al. Nat Genet 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 112
    },
    {
      "cancerStudyIdentifier": "gbm_tcga_pub",
      "typeOfCancerId": "gbm",
      "name": "Glioblastoma (TCGA, Nature 2008)",
      "shortName": "GBM (TCGA 2008)",
      "description": "<a href=\"http://cancergenome.nih.gov/\">The Cancer Genome Atlas (TCGA)</a> Glioblastoma project. 206 primary glioblastoma samples.<br> <a href=\"https://tcga-data.nci.nih.gov/docs/publications/gbm_2008/\">Raw data via the TCGA Data Portal</a>.",
      "publicStudy": true,
      "pmid": "18772890",
      "citation": "TCGA, Nature 2008",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 206
    },
    {
      "cancerStudyIdentifier": "prad_mskcc_cheny1_organoids_2014",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma Organoids (MSKCC, Cell 2014)",
      "shortName": "Prostate Organoids",
      "description": "Exome profiling of prostate cancer samples and matched organoids.",
      "publicStudy": true,
      "pmid": "25201530",
      "citation": "Gao et al., Cell 2014",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 12
    },
    {
      "cancerStudyIdentifier": "blca_plasmacytoid_mskcc_2016",
      "typeOfCancerId": "blca",
      "name": "Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)",
      "shortName": "Bladder PV (MSKCC)",
      "description": "Genomic profiling of plasmacytoid-variant (signet ring cell) tumors of the bladder, published set",
      "publicStudy": true,
      "pmid": "26901067",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 34
    },
    {
      "cancerStudyIdentifier": "prad_fhcrc",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma (Fred Hutchinson CRC, Nat Med 2016)",
      "shortName": "Prostate (FHCRC, 2016)",
      "description": "Comprehensive profiling of prostate cancer samples. Generated by Peter Nelson's lab at the Fred Hutchinson Cancer Research Center.",
      "publicStudy": true,
      "pmid": "26928463",
      "citation": "Kumar et al. Nat Med 2016",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 154
    },
    {
      "cancerStudyIdentifier": "acyc_mskcc_2013",
      "typeOfCancerId": "acyc",
      "name": "Adenoid Cystic Carcinoma (MSKCC, Nat Genet 2013)",
      "shortName": "ACyC (MSKCC, 2013)",
      "description": "Exome profiling of 60 adenoid cystic carcinoma samples",
      "publicStudy": true,
      "pmid": "23685749",
      "citation": "Ho et al. Nat Genet 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 60
    },
    {
      "cancerStudyIdentifier": "nepc_wcm_2016",
      "typeOfCancerId": "prad",
      "name": "Neuroendocrine Prostate Cancer (Trento/Cornell/Broad 2016)",
      "shortName": "NEPC (Trento/Cornell/Broad 2016)",
      "description": "Whole exome and RNA Seq data of castration resistant adenocarcinoma and castration resistant neuroendocrine prostate cancer (somatic mutations and copy number aberrations)",
      "publicStudy": true,
      "pmid": "26855148",
      "citation": "Beltran et al. Nat Med 2016",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 114
    },
    {
      "cancerStudyIdentifier": "ctcl_columbia_2015",
      "typeOfCancerId": "ctcl",
      "name": "Cutaneous T Cell Lymphoma (Columbia U, Nat Genet 2015)",
      "shortName": "CTCL (Columbia 2015)",
      "description": "Whole-Exome Sequencing (WXS) of tumor-normal sample pairs from 25 patients with Sezary Syndrome and 17 patients with other Cutaneous T Cell Lymphoma (CTCLs).",
      "publicStudy": true,
      "pmid": "26551667",
      "citation": "Da Silva Almeida et al. Nat Genet 2015",
      "groups": "",
      "status": 0,
      "allSampleCount": 42
    },
    {
      "cancerStudyIdentifier": "acyc_fmi_2014",
      "typeOfCancerId": "acyc",
      "name": "Adenoid Cystic Carcinoma (FMI, Am J Surg Pathl. 2014)",
      "shortName": "ACyC (FMI 2014)",
      "description": "Comprehensive genomic profiling of 28 metastatic ACCs.",
      "publicStudy": true,
      "pmid": "24418857",
      "citation": "Ross et al. Am J Surg Pathl. 2014",
      "groups": "ACYC",
      "status": 0,
      "allSampleCount": 28
    },
    {
      "cancerStudyIdentifier": "acbc_mskcc_2015",
      "typeOfCancerId": "acbc",
      "name": "Adenoid Cystic Carcinoma of the Breast (MSKCC, J Pathol. 2015)",
      "shortName": "ACbC (MSKCC/Breast 2015)",
      "description": "Whole exome sequencing of 12 breast AdCCs.",
      "publicStudy": true,
      "pmid": "26095796",
      "citation": "Martelotto et al. J Pathol. 2015",
      "groups": "ACYC",
      "status": 0,
      "allSampleCount": 12
    },
    {
      "cancerStudyIdentifier": "acyc_sanger_2013",
      "typeOfCancerId": "acyc",
      "name": "Adenoid Cystic Carcinoma (Sanger/MDA, JCI 2013)",
      "shortName": "ACyC (Sanger 2013)",
      "description": "Whole exome sequencing of 24 ACCs.",
      "publicStudy": true,
      "pmid": "23778141",
      "citation": "Stephens et al. JCI 2013",
      "groups": "ACYC",
      "status": 0,
      "allSampleCount": 24
    },
    {
      "cancerStudyIdentifier": "cll_iuopa_2015",
      "typeOfCancerId": "cll",
      "name": "Chronic Lymphocytic Leukemia (IUOPA, Nature 2015)",
      "shortName": "CLL(IUOPA 2015)",
      "description": "Mutation data from whole-genome or whole-exome sequencing (WGS/WXS) of 428 CLL, 54 MBL, and 24 SLL samples.",
      "publicStudy": true,
      "pmid": "26200345",
      "citation": "Puente et al. Nature 2015",
      "groups": "",
      "status": 0,
      "allSampleCount": 506
    },
    {
      "cancerStudyIdentifier": "hnsc_mdanderson_2013",
      "typeOfCancerId": "hnsc",
      "name": "Oral Squamous Cell Carcinoma (MD Anderson, Cancer Discov 2013)",
      "shortName": "Head & neck (MDA)",
      "description": "Comprehensive profiling of 40 oral squamous cell carcinoma samples from MD Anderson.",
      "publicStudy": true,
      "pmid": "23619168",
      "citation": "Pickering et al. Cancer Discov 2013",
      "groups": "",
      "status": 0,
      "allSampleCount": 40
    },
    {
      "cancerStudyIdentifier": "liad_inserm_fr_2014",
      "typeOfCancerId": "liad",
      "name": "Hepatocellular Adenoma (Inserm, Cancer Cell 2014)",
      "shortName": "Liad (Inserm 2014)",
      "description": "Mutation data from whole-exome sequencing (WXS) of 46 liver tumor and corresponding nontumor DNA.",
      "publicStudy": true,
      "pmid": "24735922",
      "groups": "",
      "status": 0,
      "allSampleCount": 46
    },
    {
      "cancerStudyIdentifier": "nbl_ucologne_2015",
      "typeOfCancerId": "nbl",
      "name": "Neuroblastoma (Broad, Nat Genet 2013)",
      "shortName": "NBL (Cologne 2015)",
      "description": "Mutation data from whole-genome sequencing of 56 neuroblastoma samples",
      "publicStudy": true,
      "pmid": "26466568",
      "citation": "Peifer et al. Nature 2015",
      "groups": "",
      "status": 0,
      "allSampleCount": 56
    },
    {
      "cancerStudyIdentifier": "paad_qcmg_uq_2016",
      "typeOfCancerId": "paad",
      "name": "Pancreatic Adenocarcinoma (QCMG, Nature 2016)",
      "shortName": "Pancreas (QCMG 2016)",
      "description": "342 primary tumours and 41 patient-derived cell lines underwent whole genome sequencing (WGS) when tumour cellularity was >40% (n=179), or deep-exome sequencing (n=204) for samples with a cellularity of 12-40%.",
      "publicStudy": true,
      "pmid": "26909576",
      "citation": "Bailey et al. Nature 2016",
      "groups": "",
      "status": 0,
      "allSampleCount": 383
    },
    {
      "cancerStudyIdentifier": "panet_shanghai_2013",
      "typeOfCancerId": "panet",
      "name": "Insulinoma (Shanghai, Nat Commun 2013)",
      "shortName": "Panet (Shanghai 2013)",
      "description": "Whole exome sequencing of 10 benign insulinoma tumors. <A HREF=\"http://www.nature.com/ncomms/2013/131210/ncomms3810/extref/ncomms3810-s1.pdf\">",
      "publicStudy": true,
      "pmid": "24326773",
      "citation": "Cao et al. Nat Commun 2013",
      "groups": "",
      "status": 0,
      "allSampleCount": 10
    },
    {
      "cancerStudyIdentifier": "all_stjude_2013",
      "typeOfCancerId": "all",
      "name": "Hypodiploid Acute Lymphoid Leukemia (St Jude, Nat Genet 2013)",
      "shortName": "ALL (St. Jude)",
      "description": "Exome sequencing of 44 ALL samples.",
      "publicStudy": true,
      "pmid": "23334668",
      "citation": "Holmfeldt et al. Nat Genet 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 44
    },
    {
      "cancerStudyIdentifier": "lcll_broad_2013",
      "typeOfCancerId": "cll",
      "name": "Chronic Lymphocytic Leukemia (Broad, Cell 2013)",
      "shortName": "CLL (Broad 2013)",
      "description": "Exome sequencing of 160 CLL samples. Generated by the Broad Institute.",
      "publicStudy": true,
      "pmid": "23415222",
      "citation": "Landau et al. Cell 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 160
    },
    {
      "cancerStudyIdentifier": "coadread_dfci_2016",
      "typeOfCancerId": "coadread",
      "name": "Colorectal Adenocarcinoma (DFCI, Cell Reports 2016)",
      "shortName": "Colorectal (DFCI 2016)",
      "description": "Whole-exome sequencing of 619 colorectal cancers with clinicopathologic annotations.",
      "publicStudy": true,
      "pmid": "27149842",
      "citation": "Giannakis et al. Cell Reports 2016",
      "groups": "",
      "status": 0,
      "allSampleCount": 619
    },
    {
      "cancerStudyIdentifier": "dlbc_broad_2012",
      "typeOfCancerId": "dlbcl",
      "name": "Diffuse Large B-Cell Lymphoma (Broad, PNAS 2012)",
      "shortName": "DLBCL (Broad 2012)",
      "description": "Whole exome sequencing of 58 DLBCL samples.",
      "publicStudy": true,
      "pmid": "22343534",
      "citation": "Lohr et al., PNAS 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 58
    },
    {
      "cancerStudyIdentifier": "mcl_idibips_2013",
      "typeOfCancerId": "mcl",
      "name": "Mantle Cell Lymphoma (IDIBIPS, PNAS 2013)",
      "shortName": "MCL (IDIBIPS 2013)",
      "description": "Whole exome sequencing of 29 primary mantle cell lymphomas.",
      "publicStudy": true,
      "pmid": "24145436",
      "citation": "Bea et al., PNAS 2013",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 29
    },
    {
      "cancerStudyIdentifier": "mds_tokyo_2011",
      "typeOfCancerId": "mds",
      "name": "Myelodysplasia (Tokyo, Nature 2011)",
      "shortName": "MDS (Tokyo)",
      "description": "Whole exome sequencing of 29 myelodysplasia samples from the University of Tokyo.",
      "publicStudy": true,
      "pmid": "21909114",
      "citation": "Yoshida et al. Nature 2011",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 29
    },
    {
      "cancerStudyIdentifier": "plmeso_nyu_2015",
      "typeOfCancerId": "plmeso",
      "name": "Malignant Pleural Mesothelioma (NYU, Cancer Res 2015)",
      "shortName": "PLMESO (NYU 2015)",
      "description": "Mutation data from whole-exome sequencing of 22 malignant pleural mesotheliomas (PLMESO) and matched blood samples.",
      "publicStudy": true,
      "pmid": "25488749",
      "citation": "Guo et al. Cancer Res 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 22
    },
    {
      "cancerStudyIdentifier": "nsclc_tcga_broad_2016",
      "typeOfCancerId": "nsclc",
      "name": "Pan-Lung Cancer (TCGA, Nat Genet 2016)",
      "shortName": "NSCLC (TCGA 2016)",
      "description": "Somatic genome alterations in lung adenocarcinomas and squamous cell carcinomas.",
      "publicStudy": true,
      "pmid": "27158780",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 1144
    },
    {
      "cancerStudyIdentifier": "acyc_mda_2015",
      "typeOfCancerId": "acyc",
      "name": "Adenoid Cystic Carcinoma (MDA, Clin Cancer Res 2015)",
      "shortName": "ACyC (MDA 2015)",
      "description": "WGS of 21 salivary ACCs and targeted molecular analyses of a validation set (81 patients).",
      "publicStudy": true,
      "pmid": "26631609",
      "citation": "Mitani et al. Clin Cancer Res. 2015",
      "groups": "",
      "status": 0,
      "allSampleCount": 102
    },
    {
      "cancerStudyIdentifier": "hnc_mskcc_2016",
      "typeOfCancerId": "head_neck",
      "name": "Recurrent and Metastatic Head & Neck Cancer (JAMA Oncology, 2016)",
      "shortName": "hnc_mskcc_2016",
      "description": "Targeted sequencing of 151 patients with advanced, treatment resistant head and neck tumors",
      "publicStudy": true,
      "groups": "CHANT",
      "status": 0,
      "allSampleCount": 151
    },
    {
      "cancerStudyIdentifier": "prad_mskcc",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma (MSKCC, Cancer Cell 2010)",
      "shortName": "Prostate (MSKCC 2010)",
      "description": "MSKCC Prostate Oncogenome Project. 181 primary, 37 metastatic prostate cancer samples, 12 prostate cancer cell lines and xenografts.<br><a href=\"http://cbio.mskcc.org/cancergenomics/prostate/data/\">Normalized flat data files</a>. <a href=\"http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE21032\">Raw data via GEO (GSE21032)</a>.",
      "publicStudy": true,
      "pmid": "20579941",
      "citation": "Taylor et al. Cancer Cell 2010",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 216
    },
    {
      "cancerStudyIdentifier": "acc_tcga",
      "typeOfCancerId": "acc",
      "name": "Adrenocortical Carcinoma (TCGA, Provisional)",
      "shortName": "ACC (TCGA)",
      "description": "TCGA Adrenocortical Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 92
    },
    {
      "cancerStudyIdentifier": "laml_tcga",
      "typeOfCancerId": "aml",
      "name": "Acute Myeloid Leukemia (TCGA, Provisional)",
      "shortName": "AML (TCGA)",
      "description": "TCGA Acute Myeloid Leukemia; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 200
    },
    {
      "cancerStudyIdentifier": "blca_tcga",
      "typeOfCancerId": "blca",
      "name": "Bladder Urothelial Carcinoma (TCGA, Provisional)",
      "shortName": "Bladder (TCGA)",
      "description": "TCGA Bladder Urothelial Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 413
    },
    {
      "cancerStudyIdentifier": "brca_tcga",
      "typeOfCancerId": "brca",
      "name": "Breast Invasive Carcinoma (TCGA, Provisional)",
      "shortName": "Breast (TCGA)",
      "description": "TCGA Breast Invasive Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 1105
    },
    {
      "cancerStudyIdentifier": "kirc_tcga",
      "typeOfCancerId": "ccrcc",
      "name": "Kidney Renal Clear Cell Carcinoma (TCGA, Provisional)",
      "shortName": "ccRCC (TCGA)",
      "description": "TCGA Kidney Renal Clear Cell Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 538
    },
    {
      "cancerStudyIdentifier": "cesc_tcga",
      "typeOfCancerId": "cesc",
      "name": "Cervical Squamous Cell Carcinoma and Endocervical Adenocarcinoma (TCGA, Provisional)",
      "shortName": "Cervical (TCGA)",
      "description": "TCGA Cervical Squamous Cell Carcinoma and Endocervical Adenocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 309
    },
    {
      "cancerStudyIdentifier": "chol_tcga",
      "typeOfCancerId": "chol",
      "name": "Cholangiocarcinoma (TCGA, Provisional)",
      "shortName": "Cholangiocarcinoma (TCGA)",
      "description": "TCGA Cholangiocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 36
    },
    {
      "cancerStudyIdentifier": "kich_tcga",
      "typeOfCancerId": "chrcc",
      "name": "Kidney Chromophobe (TCGA, Provisional)",
      "shortName": "chRCC (TCGA)",
      "description": "TCGA Kidney Chromophobe; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 66
    },
    {
      "cancerStudyIdentifier": "coadread_tcga",
      "typeOfCancerId": "coadread",
      "name": "Colorectal Adenocarcinoma (TCGA, Provisional)",
      "shortName": "Colorectal (TCGA)",
      "description": "TCGA Colorectal Adenocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 633
    },
    {
      "cancerStudyIdentifier": "dlbc_tcga",
      "typeOfCancerId": "dlbcl",
      "name": "Lymphoid Neoplasm Diffuse Large B-cell Lymphoma (TCGA, Provisional)",
      "shortName": "DLBC (TCGA)",
      "description": "TCGA Lymphoid Neoplasm Diffuse Large B-cell Lymphoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 48
    },
    {
      "cancerStudyIdentifier": "esca_tcga",
      "typeOfCancerId": "esca",
      "name": "Esophageal Carcinoma (TCGA, Provisional)",
      "shortName": "Esophagus (TCGA)",
      "description": "TCGA Esophageal Carcinoma ; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 186
    },
    {
      "cancerStudyIdentifier": "gbm_tcga",
      "typeOfCancerId": "gbm",
      "name": "Glioblastoma Multiforme (TCGA, Provisional)",
      "shortName": "GBM (TCGA)",
      "description": "TCGA Glioblastoma Multiforme; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 604
    },
    {
      "cancerStudyIdentifier": "lgg_tcga",
      "typeOfCancerId": "difg",
      "name": "Brain Lower Grade Glioma (TCGA, Provisional)",
      "shortName": "Glioma (TCGA)",
      "description": "TCGA Brain Lower Grade Glioma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 530
    },
    {
      "cancerStudyIdentifier": "hnsc_tcga",
      "typeOfCancerId": "hnsc",
      "name": "Head and Neck Squamous Cell Carcinoma (TCGA, Provisional)",
      "shortName": "Head & neck (TCGA)",
      "description": "TCGA Head and Neck Squamous Cell Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 530
    },
    {
      "cancerStudyIdentifier": "lihc_tcga",
      "typeOfCancerId": "hcc",
      "name": "Liver Hepatocellular Carcinoma (TCGA, Provisional)",
      "shortName": "Liver (TCGA)",
      "description": "TCGA Liver Hepatocellular Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 442
    },
    {
      "cancerStudyIdentifier": "luad_tcga",
      "typeOfCancerId": "luad",
      "name": "Lung Adenocarcinoma (TCGA, Provisional)",
      "shortName": "Lung adeno (TCGA)",
      "description": "TCGA Lung Adenocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 522
    },
    {
      "cancerStudyIdentifier": "lusc_tcga",
      "typeOfCancerId": "lusc",
      "name": "Lung Squamous Cell Carcinoma (TCGA, Provisional)",
      "shortName": "Lung squ (TCGA)",
      "description": "TCGA Lung Squamous Cell Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 504
    },
    {
      "cancerStudyIdentifier": "skcm_tcga",
      "typeOfCancerId": "skcm",
      "name": "Skin Cutaneous Melanoma (TCGA, Provisional)",
      "shortName": "Melanoma (TCGA)",
      "description": "TCGA Skin Cutaneous Melanoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 479
    },
    {
      "cancerStudyIdentifier": "meso_tcga",
      "typeOfCancerId": "plmeso",
      "name": "Mesothelioma (TCGA, Provisional)",
      "shortName": "Mesothelioma (TCGA)",
      "description": "TCGA Mesothelioma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 87
    },
    {
      "cancerStudyIdentifier": "ov_tcga",
      "typeOfCancerId": "hgsoc",
      "name": "Ovarian Serous Cystadenocarcinoma (TCGA, Provisional)",
      "shortName": "Ovarian (TCGA)",
      "description": "TCGA Ovarian Serous Cystadenocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 603
    },
    {
      "cancerStudyIdentifier": "paad_tcga",
      "typeOfCancerId": "paad",
      "name": "Pancreatic Adenocarcinoma (TCGA, Provisional)",
      "shortName": "Pancreas (TCGA)",
      "description": "TCGA Pancreatic Adenocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 186
    },
    {
      "cancerStudyIdentifier": "pcpg_tcga",
      "typeOfCancerId": "mnet",
      "name": "Pheochromocytoma and Paraganglioma (TCGA, Provisional)",
      "shortName": "PCPG (TCGA)",
      "description": "TCGA Pheochromocytoma and Paraganglioma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 184
    },
    {
      "cancerStudyIdentifier": "kirp_tcga",
      "typeOfCancerId": "prcc",
      "name": "Kidney Renal Papillary Cell Carcinoma (TCGA, Provisional)",
      "shortName": "pRCC (TCGA)",
      "description": "TCGA Kidney Renal Papillary Cell Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 293
    },
    {
      "cancerStudyIdentifier": "prad_tcga",
      "typeOfCancerId": "prad",
      "name": "Prostate Adenocarcinoma (TCGA, Provisional)",
      "shortName": "Prostate (TCGA)",
      "description": "TCGA Prostate Adenocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 499
    },
    {
      "cancerStudyIdentifier": "sarc_tcga",
      "typeOfCancerId": "soft_tissue",
      "name": "Sarcoma (TCGA, Provisional)",
      "shortName": "Sarcoma (TCGA)",
      "description": "TCGA Sarcoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 265
    },
    {
      "cancerStudyIdentifier": "stad_tcga",
      "typeOfCancerId": "stad",
      "name": "Stomach Adenocarcinoma (TCGA, Provisional)",
      "shortName": "Stomach (TCGA)",
      "description": "TCGA Stomach Adenocarcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 478
    },
    {
      "cancerStudyIdentifier": "tgct_tcga",
      "typeOfCancerId": "nsgct",
      "name": "Testicular Germ Cell Cancer (TCGA, Provisional)",
      "shortName": "Testicular germ cell (TCGA)",
      "description": "TCGA Testicular Germ Cell Cancer; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 156
    },
    {
      "cancerStudyIdentifier": "thym_tcga",
      "typeOfCancerId": "thym",
      "name": "Thymoma (TCGA, Provisional)",
      "shortName": "Thymoma(TCGA)",
      "description": "TCGA Thymoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 124
    },
    {
      "cancerStudyIdentifier": "thca_tcga",
      "typeOfCancerId": "thpa",
      "name": "Thyroid Carcinoma (TCGA, Provisional)",
      "shortName": "Thyroid (TCGA)",
      "description": "TCGA Thyroid Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 516
    },
    {
      "cancerStudyIdentifier": "ucec_tcga",
      "typeOfCancerId": "ucec",
      "name": "Uterine Corpus Endometrial Carcinoma (TCGA, Provisional)",
      "shortName": "Uterine (TCGA)",
      "description": "TCGA Uterine Corpus Endometrial Carcinoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 548
    },
    {
      "cancerStudyIdentifier": "ucs_tcga",
      "typeOfCancerId": "ucs",
      "name": "Uterine Carcinosarcoma (TCGA, Provisional)",
      "shortName": "Uterine CS (TCGA)",
      "description": "TCGA Uterine Carcinosarcoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 57
    },
    {
      "cancerStudyIdentifier": "uvm_tcga",
      "typeOfCancerId": "um",
      "name": "Uveal Melanoma (TCGA, Provisional)",
      "shortName": "Uveal melanoma (TCGA)",
      "description": "TCGA Uveal Melanoma; raw data at the <A HREF=\"https://tcga-data.nci.nih.gov/\">NCI</A>.",
      "publicStudy": true,
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 80
    },
    {
      "cancerStudyIdentifier": "urcc_mskcc_2016",
      "typeOfCancerId": "urcc",
      "name": "Unclassified Renal Cell Carcinoma (MSKCC 2016)",
      "shortName": "Renal unclass (MSKCC)",
      "description": "Molecular Analysis of Unclassified Renal Cell Carcinoma",
      "publicStudy": true,
      "groups": "BERGERM1;CHENY;CMO",
      "status": 0,
      "allSampleCount": 62
    },
    {
      "cancerStudyIdentifier": "brca_tcga_pub",
      "typeOfCancerId": "brca",
      "name": "Breast Invasive Carcinoma (TCGA, Nature 2012)",
      "shortName": "Breast (TCGA pub)",
      "description": "<a href=\"http://cancergenome.nih.gov/\">The Cancer Genome Atlas (TCGA)</a> Breast Invasive Carcinoma project. 825 cases.<br><i>Nature 2012.</i> <a href=\"https://tcga-data.nci.nih.gov/docs/publications/brca_2012/\">Raw data via the TCGA Data Portal</a>.",
      "publicStudy": true,
      "pmid": "23000897",
      "citation": "TCGA, Nature 2012",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 825
    },
    {
      "cancerStudyIdentifier": "brca_tcga_pub2015",
      "typeOfCancerId": "brca",
      "name": "Breast Invasive Carcinoma (TCGA, Cell 2015)",
      "shortName": "Breast (TCGA 2015)",
      "description": "<a href=\"http://cancergenome.nih.gov/\">The Cancer Genome Atlas (TCGA)</a> Breast Invasive Carcinoma project. 817 cases (TCGA Cell 2015).",
      "publicStudy": true,
      "pmid": "26451490",
      "citation": "TCGA, Cell 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 817
    },
    {
      "cancerStudyIdentifier": "brca_metabric",
      "typeOfCancerId": "brca",
      "name": "Breast Cancer (METABRIC, Nat Commun 2016)",
      "shortName": "Breast (METABRIC)",
      "description": "The somatic mutation profiles of 2433 breast cancers.",
      "publicStudy": true,
      "pmid": "27161491",
      "citation": "Pereira et al. Nat Commun 2015",
      "groups": "PUBLIC",
      "status": 0,
      "allSampleCount": 2433
    }
  ]
};

export default cancerData;