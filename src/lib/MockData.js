const mockData = {
  "cancerTypes": [
    { 
      "name": "Adrenal Gland",
      "cancerTypeId": "adrenal_gland",
      "allDescendants": ["adrenal_gland", "acc"],
      "children": [
        { 
          "name": "Adrenocortical Carcinoma", 
          "cancerTypeId": "acc"
        }]
    },
    {
      "name": "Biliary Tract",
      "cancerTypeId": "biliary_tract",
      "allDescendants": ["biliary_tract", "chol", "gbc"],
      "children": [
        {
          "name": "Cholangiocarcinoma",
          "cancerTypeId": "chol"
        },
        {
          "name": "Gallbladder Cancer",
          "cancerTypeId": "gbc"
        }]
    },
    {
      "name": "Bladder/Urinary Tract",
      "cancerTypeId": "bladder",
      "allDescendants": ["bladder", "blca"],
      "children": [
        {
          "name": "Bladder Urothelial Carcinoma",
          "cancerTypeId": "blca"
        }]
    },
    {
      "name": "Blood",
      "cancerTypeId": "blood",
      "allDescendants": ["blood", "leuk", "all", "aml", "cll", "mm", "mds"],
      "children": [
        { 
          "name": "Leukemia",
          "cancerTypeId": "leuk",
          "children": [
            { "name": "Acute Lymphoid Leukemia", "cancerTypeId": "all" },
            { "name": "Acute Myeloid Leukemia", "cancerTypeId": "aml" },
            { "name": "Chronic Lymphocytic Leukemia", "cancerTypeId": "cll" },
          ]
        },
        { "name": "Multiple Myeloma", "cancerTypeId": "mm" },
        { "name": "Myelodysplasia", "cancerTypeId": "mds" },]
    },
    {
      "name": "Bone",
      "cancerTypeId": "bone",
      "allDescendants": ["bone", "es"],
      "children": [
        { 
          "name": "Ewing Sarcoma",
          "cancerTypeId": "es"
        }]
    },
    {
      "name": "Bowel",
      "cancerTypeId": "bowel",
      "allDescendants": ["bowel", "coadread"],
      "children": [
        { 
          "name": "Colorectal Adenocarcinoma",
          "cancerTypeId": "coadread"
        }]
    },
    {
      "name": "Breast",
      "cancerTypeId": "breast",
      "allDescendants": ["breast", "brca", "acbc"],
      "children": [
        { 
          "name": "Invasive Breast Carcinoma",
          "cancerTypeId": "brca",
          "children": [
            { "name": "Adenoid Cystic Breast Cancer", "cancerTypeId": "acbc" }
          ]
        }]
    },
    {
      "name": "CNS/Brain",
      "cancerTypeId": "brain",
      "allDescendants": ["brain", "difg", "gb", "gbm", "embt", "mbl", "nbl", "mnet"],
      "children": [
        {
          "name": "Diffuse Glioma",
          "cancerTypeId": "difg",
          "children": [{
            "name": "Glioblastoma",
            "cancerTypeId": "gb",
            "children": [
              { 
                "name": "Glioblastoma Multiforme",
                "cancerTypeId": "gbm"
              }]
          }]
        },{
          "name": "Embryonal Tumor",
          "cancerTypeId": "embt",
          "children": [
            { "name": "Medulloblastoma", "cancerTypeId": "mbl" },
            { "name": "Neuroblastoma", "cancerTypeId": "nbl" },
            ]
        },{
          "name": "Miscellaneous Neuroepithelial Tumor",
          "cancerTypeId": "mnet"
        }]
    },
    {
      "name": "Cervix",
      "cancerTypeId": "cervix",
      "allDescendants": ["cervix", "cesc"],
      "children": [
        { 
          "name": "Cervical Squamous Cell Carcinoma",
          "cancerTypeId": "cesc"
        }]
    },
    {
      "name": "Esophagus/Stomach",
      "cancerTypeId": "stomach",
      "allDescendants": ["stomach", "escc", "egc"],
      "children": [
        { "name": "Esophageal Squamous Cell Carcinoma", "cancerTypeId": "escc" },
        { "name": "Esophagogastric Adenocarcinoma", "cancerTypeId": "egc" }
        ]
    },
    {
      "name": "Eye",
      "cancerTypeId": "eye",
      "allDescendants": ["eye", "om"],
      "children": [
        { 
          "name": "Ocular Melanoma", 
          "cancerTypeId": "om",
          "children": [{
            "name": "Uveal Melanoma",
            "cancerTypeId": "um"
          }]
        }]
    },
    {
      "name": "Head and Neck",
      "cancerTypeId": "head_neck",
      "allDescendants": ["head_neck", "hnsc", "npc", "saca", "cacc"],
      "children": [
        { "name": "Head and Neck Squamous Cell Carcinoma", "cancerTypeId": "hnsc" },
        { "name": "Nasopharyngeal Carcinoma", "cancerTypeId": "npc" },
        { 
          "name": "Salivary Carcinoma",
          "cancerTypeId": "saca",
          "children": [{
            "name": "Adenoid Cystic Carcinoma", "cancerTypeId": "cacc"
          }]
        },
        ]
    },
    {
      "name": "Kidney",
      "cancerTypeId": "kidney",
      "allDescendants": ["kidney", "rcc", "ccrcc", "nccrcc", "chrcc", "prcc", "urcc"],
      "children": [
        {
          "name": "Renal Cell Carcinoma",
          "cancerTypeId": "rcc",
          "children": [{
            "name": "Renal Clear Cell Carcinoma",
            "cancerTypeId": "ccrcc"
          }, {
            "name": "Renal Non-Clear Cell Carcinoma",
            "cancerTypeId": "nccrcc",
            "children": [{
              "name": "Chromophobe Renal Cell Carcinoma",
              "cancerTypeId": "chrcc"
            },
            {
              "name": "Papillary Renal Cell Carcinoma",
              "cancerTypeId": "prcc"
            },{
              "name": "Unclassified Renal Cell Carcinoma",
              "cancerTypeId": "urcc"
            }]
          }]
        }]
    },
    {
      "name": "Liver",
      "cancerTypeId": "liver",
      "allDescendants": ["liver", "liad", "hcc"],
      "children": [
        { "name": "Hepatocellular Adenoma", "cancerTypeId": "liad"}, 
        { "name": "Hepatocellular Carcinoma", "cancerTypeId": "hcc"}
        ]
    },
    {
      "name": "Lung",
      "cancerTypeId": "lung",
      "allDescendants": ["lung", "lnet", "sclc", "nsclc", "luad", "lusc"],
      "children": [
        { 
          "name": "Lung Neuroendocrine Tumor",
          "cancerTypeId": "lnet",
          "children": [{ 
            "name": "Small Cell Lung Cancer",
            "cancerTypeId": "sclc"
          }]
        },
        { 
          "name": "Non-Small Cell Lung Cancer",
          "cancerTypeId": "nsclc",
          "children": [{ 
            "name": "Lung Adenocarcinoma",
            "cancerTypeId": "luad"
          },{ 
            "name": "Lung Squamous Cell Carcinoma",
            "cancerTypeId": "lusc"
          }]
        }
        ]
    },
    {
      "name": "Lymph",
      "cancerTypeId": "lymph",
      "allDescendants": ["lymph", "nhl", "bcl", "dlbcl", "mcl", "pcnsl", "tnkl", "ctcl"],
      "children": [{
        "name": "Non-Hodgkin Lymphoma",
        "cancerTypeId": "nhl",
        "children": [
          { 
            "name": "B-Cell Lymphoma",
            "cancerTypeId": "bcl",
            "children": [{
              "name": "Diffuse Large B-Cell Lymphoma",
              "cancerTypeId": "dlbcl"
            },{
              "name": "Mantle Cell Lymphoma",
              "cancerTypeId": "mcl"
            },{
              "name": "Primary CNS Lymphoma",
              "cancerTypeId": "pcnsl"
            },
            ]
          },
          { 
            "name": "T-Cell and Natural Killer Lymphoma",
            "cancerTypeId": "tnkl",
            "children": [{
              "name": "Cutaneous T-Cell Lymphoma",
              "cancerTypeId": "ctcl"
            }]
          }
        ]
      }]
    },
    {
      "name": "Other",
      "cancerTypeId": "other",
      "allDescendants": ["other", "cup", "mixed"],
      "children": [{
        "name": "Cancer of Unknown Primary",
        "cancerTypeId": "cup",
        "children": [{ "name": "Mixed Cancer Types", "cancerTypeId": "mixed" }]
      }]
    },
    {
      "name": "Ovary",
      "cancerTypeId": "ovary",
      "allDescendants": ["ovary", "ovt"],
      "children": [
        { "name": "Ovarian Epithelial Tumor", "cancerTypeId": "ovt" }
        ]
    },
    {
      "name": "Pancreas",
      "cancerTypeId": "pancreas",
      "allDescendants": ["pancreas", "paac", "paad", "panet"],
      "children": [
        {
          "name": "Acinar Cell Carcinoma of the Pancreas",
          "cancerTypeId": "paac"},
        {
          "name": "Pancreatic Adenocarcinoma",
          "cancerTypeId": "paad"
        },
        {
          "name": "Pancreatic Neuroendocrine Tumor",
          "cancerTypeId": "panet"
        }]
    },
    {
      "name": "Peripheral Nervous System",
      "cancerTypeId": "pns",
      "allDescendants": ["pns", "nst", "mpnst"],
      "children": [
        { 
          "name": "Nerve Sheath Tumor",
          "cancerTypeId": "nst",
          "children": [
            { 
              "name": "Malignant Peripheral Nerve Sheath Tumor",
              "cancerTypeId": "mpnst"
            }
          ]
        }]
    },
    {
      "name": "Pleura",
      "cancerTypeId": "pleura",
      "allDescendants": ["pleura", "plmeso"],
      "children": [
        {
          "name": "Pleural Mesothelioma",
          "cancerTypeId": "plmeso"
        }]
    },
    {
      "name": "Prostate",
      "cancerTypeId": "prostate",
      "allDescendants": ["prostate", "prad"],
      "children": [
        {
          "name": "Prostate Adenocarcinoma",
          "cancerTypeId": "prad"
        }]
    },
    {
      "name": "Skin",
      "cancerTypeId": "skin",
      "allDescendants": ["skin", "cscc", "mel", "skcm", "desm"],
      "children": [
        {
         "name": "Cutaneous Squamous Cell Carcinoma",
         "cancerTypeId": "cscc" 
        },
        {
         "name": "Melanoma",
         "cancerTypeId": "mel",
         "children": [
        {
         "name": "Cutaneous Melanoma",
         "cancerTypeId": "skcm" 
        },
        {
         "name": "Desmoplastic Melanoma",
         "cancerTypeId": "desm" 
        }]
        }]
    },
    {
      "name": "Soft Tissue",
      "cancerTypeId": "soft_tissue",
      "allDescendants": ["soft_tissue", "rms"],
      "children": [
        {
          "name": "Rhabdomyosarcoma",
          "cancerTypeId": "rms"
        }]
    },
    {
      "name": "Testis",
      "cancerTypeId": "testis",
      "allDescendants": ["testis", "nsgct"],
      "children": [
        {
          "name": "Non-Seminomatous Germ Cell Tumor",
          "cancerTypeId": "nsgct"
        }]
    },
    {
      "name": "Thymus",
      "cancerTypeId": "thymus",
      "allDescendants": ["thymus", "tet", "thym"],
      "children": [
        {
          "name": "Thymic Epithelial Tumor",
          "cancerTypeId": "tet",
          "children": [
          { "name": "Thymoma", "cancerTypeId": "thym" }]
        }]
    },
    {
      "name": "Thyroid",
      "cancerTypeId": "thyroid",
      "allDescendants": ["thyroid", "thpa"],
      "children": [
        {
          "name": "Papillary Thyroid Cancer",
          "cancerTypeId": "thpa"
        }]
    },
    {
      "name": "Uterus",
      "cancerTypeId": "uterus",
      "allDescendants": ["uterus", "umec", "ucs"],
      "children": [
        { 
          "name": "Endometrial Carcinoma",
          "cancerTypeId": "umec",
          "children": [
            { "name": "Uterine Carcinosarcoma/Uterine Malignant Mixed Mullerian Tumor", "cancerTypeId": "ucs" }
          ]
        }]
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

export default mockData;