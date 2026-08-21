function FindProxyForURL(url, host) {

//  SSH bastion forwards
//    ssh -D 5111 lsst-adm01.ncsa.illinois.edu    ## LSST NPCF xCAT
//    ssh -D 5112 cerberus{1-4}.ncsa.illinois.edu
////    ssh -D 5113 lsst-pup-npcf.ncsa.illinois.edu    ## LSST NPCF Puppet
//    ssh -D 5114 lsst-adm-ncsa.ncsa.illinois.edu    ## LSST NCSA xCAT
////    ssh -D 6111 fadm2.ncsa.illinois.edu # actually c3 then ssh -4 -D 6111 fadm2
//    ssh -D 7111 ...madm2... # but use ab1 instead
//    ssh -D 7112 ab1
//    ssh -D 8111 mgadm.ncsa.illinois.edu
//    ssh -D 8112 dt-prov02.delta.internal.ncsa.edu
//    ssh -D 8113 mg-adm01.internal.ncsa.edu

//  more from Bill Glick
//    ssh -D 8082 bastion{1-2}.security.ncsa.illinois.edu
//    ssh -D 8083 lsst-login{1-3}.ncsa.illinois.edu
//    ssh -D 8084 140.252.32.143   ## LSST TUCSON BASTION
//    ssh -D 8086 lsst-adm-ncsa.ncsa.illinois.edu ## LSST NCSA xCAT



    // LSST-LOGIN
//    var  lsst_proxy = "SOCKS 127.0.0.1:8083";
//  NOTHING DEFINED YET FOR LSST PROXY

    // LSST TUCSON BASTION
    var lsst_tucson_bastion_proxy = "SOCKS 127.0.0.1:8084";
    var lsst_tucson_bastion_subnets = [
        {
                "name": "lsst tucson atarchiver idrac",
                "start": "140.252.32.127",
                "netmask": "255.255.255.255"
        },
        {
                "name": "lsst tucson comcam idrac",
                "start": "140.252.32.161",
                "netmask": "255.255.255.248"
        },
    ];
    for (var i = 0; i < lsst_tucson_bastion_subnets.length; i++)
    {
        if ( isInNet(host, lsst_tucson_bastion_subnets[i].start, lsst_tucson_bastion_subnets[i].netmask) )
                return lsst_tucson_bastion_proxy;
    }

    // LSST-ADM01 NPCF
    var lsst_adm01_bastion_proxy = "SOCKS 127.0.0.1:5111";
    var lsst_adm01_bastion_subnets = [
        {
                "name": "lsst npcf xCAT-SVC ipmi",
                "start": "192.168.180.1",
                "netmask": "255.255.252.0"
        },
        {
                "name": "lsst npcf xCAT-SVC Test ipmi",
                "start": "192.168.80.1",
                "netmask": "255.255.255.128"
        },

    ];
    for (var i = 0; i < lsst_adm01_bastion_subnets.length; i++)
    {
        if ( isInNet(host, lsst_adm01_bastion_subnets[i].start, lsst_adm01_bastion_subnets[i].netmask) )
                return lsst_adm01_bastion_proxy;
    }

    // FADM2 NPCF
    var fadm2_bastion_proxy = "SOCKS 127.0.0.1:6111";
    var fadm2_bastion_subnets = [
        {
                "name": "fadm2 xCAT-SVC ipmi",
                "start": "172.31.4.0",
                "netmask": "255.255.254.0"
        },
    ];
    for (var i = 0; i < fadm2_bastion_subnets.length; i++)
    {
        if ( isInNet(host, fadm2_bastion_subnets[i].start, fadm2_bastion_subnets[i].netmask) )
                return fadm2_bastion_proxy;
    }

    // LSST-ADM-NCSA
    var lsst_adm_ncsa_bastion_proxy = "SOCKS 127.0.0.1:5114";
    var lsst_adm_ncsa_bastion_subnets = [
        {
                "name": "lsst ncsa xCAT-SVC ipmi TEMPORARY",
                "start": "192.158.28.1",
                "netmask": "255.255.254.0"
        },   
        {
                "name": "lsst ncsa xCAT-SVC ipmi",
                "start": "192.168.28.1",
                "netmask": "255.255.254.0"
        },      
        {
                "name": "lsst ncsa xCAT-SVC Test ipmi",
                "start": "192.168.80.129",
                "netmask": "255.255.255.128"
        },     
    ];  
    for (var i = 0; i < lsst_adm_ncsa_bastion_subnets.length; i++)
    {           
        if ( isInNet(host, lsst_adm_ncsa_bastion_subnets[i].start, lsst_adm_ncsa_bastion_subnets[i].netmask) )
                return lsst_adm_ncsa_bastion_proxy;
    }   


    // Cerberus
    var cerberus_bastion_proxy = "SOCKS5 127.0.0.1:5112;SOCKS 127.0.0.1:5112";

    if ( host == "isf-npcf-pve01.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "ici-ansible.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    if ( host == "mgblazetest.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    if ( host == "mgblaze.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    if ( host == "jira-old.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    if ( host == "dt-pve1.delta.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "dt-pve2.delta.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "dt-pve3.delta.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "dt-pve4.delta.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "cc-hv01-vm.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "cc-hv02-vm.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "cc-hv03-vm.cc.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "cc-hv04-vm.cc.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "cc-hv05-vm.cc.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "dt-jenkins.delta.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    if ( host == "set-analytics.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    if ( host == "vsphere.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgrs.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgrstest.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgrscon.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgrscontest.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgportal1.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgportal.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgportal2.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "mgportaltest.ncsa.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "viewalert02.techservices.illinois.edu" )
	return cerberus_bastion_proxy;
    if ( host == "dt-jenkins.delta.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    if ( host == "vcenter.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "mg-pve1.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "mg-pve2.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "mg-pve3.internal.ncsa.edu" )
        return cerberus_bastion_proxy;
    if ( host == "netbox.ncsa.illinois.edu" )
        return cerberus_bastion_proxy;
    var cerberus_bastion_subnets = [
	{
		"name": "DCL Datacenter network for TS Nagios monitoring service",
		"start": "192.17.18.64",
		"netmask": "255.255.255.240"
	},
	{
		"name": "vsphere mgmt net esxi storage ipmi",
		"start": "10.142.192.1",
		"netmask": "255.255.255.0"
	},
        {
                "name": "nebula iDRAC",
                "start": "10.142.208.1",
                "netmask": "255.255.255.0"
        },
        {
                "name": "lsst ncsa 3003 mgmt net esxi storage ipmi",
                "start": "10.142.237.1",
                "netmask": "255.255.255.0"
        },
        {
                "name": "lsst npcf vsphere mgmt net",
                "start": "172.24.16.1",
                "netmask": "255.255.255.0"
        },
        {
                "name": "lsst laserena aa net",
                "start": "139.229.126.1",
                "netmask": "255.255.255.0"
        },
        {
                "name": "lsst cerro pachon aa ipmi net",
                "start": "172.28.5.1",
                "netmask": "255.255.255.224"
        },
        {
                "name": "lsst cerro pachon aa esx net",
                "start": "172.28.5.33",
                "netmask": "255.255.255.224"
        },
        {
                "name": "mg facilities net",
                "start": "172.28.16.0",
                "netmask": "255.255.255.224"
        },
        {
                "name": "Radiant facilities net",
                "start": "172.28.16.32",
                "netmask": "255.255.255.224"
        },
        {
                "name": "ncsa netdot",
                "start": "141.142.141.136",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa netdot-proxy ipam",
                "start": "141.142.141.131",
                "netmask": "255.255.255.255"
        },
        {
                "name": "lsst-nts-k8s.ncsa.illinois.edu",
                "start": "141.142.238.233",
                "netmask": "255.255.255.255"
        },
        {
                "name": "lsst in npcf",
                "start": "141.142.180.1",
                "netmask": "255.255.254.0"
        },
        {
                "name": "odcim.ncsa.illinois.edu",
                "start": "141.142.151.10",
                "netmask": "255.255.255.255"
        },
        {       
                "name": "magnus rstudio server",
                "start": "141.142.161.134",
                "netmask": "255.255.255.255"
        },
        {       
                "name": "magnus rstudio connect",
                "start": "141.142.161.135",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa httpproxy",
                "start": "141.142.192.39",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsatest",
                "start": "141.142.193.89",
                "netmask": "255.255.255.255"
        },
//        {
//                "name": "ncsa internal",
//                "start": "141.142.192.200",
//                "netmask": "255.255.255.255"
//        },
        {
                "name": "ncsa internal-test",
                "start": "141.142.192.137",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa avl-test",
                "start": "141.142.192.134",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa edream-test",
                "start": "141.142.193.98",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa rockosocko",
                "start": "141.142.192.206",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa its-foreman",
                "start": "141.142.192.234",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa its-repo",
                "start": "141.142.192.155",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa identity",
                "start": "141.142.193.68",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa events",
                "start": "141.142.192.92",
                "netmask": "255.255.255.255"
        },
        {
                "name": "cmdb.ncsa",
                "start": "141.142.192.133",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa cmdb",
                "start": "141.142.192.26",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa cmdb - test",
                "start": "141.142.192.113",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa cmdb - dev kimber7",
                "start": "141.142.192.34",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa mysql",
                "start": "141.142.192.249",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa mysql cluster",
                "start": "141.142.193.144",
                "netmask": "255.255.255.240"
        },
        {
                "name": "ncsa its-monitor",
                "start": "141.142.192.42",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa wiki-test",
                "start": "141.142.192.248",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa wiki",
                "start": "141.142.192.52",
                "netmask": "255.255.255.255"
        },
        {
                "name": "jiracmdline",
                "start": "141.142.194.1",
                "netmask": "255.255.255.255"
        },
        {
                "name": "ncsa jira-test",
                "start": "141.142.192.195",
                "netmask": "255.255.255.255"
        },
        {
                "name": "asd prov",
                "start": "172.28.18.0",
                "netmask": "255.255.255.0"
        },
        {
                "name": "ICCP VMware Mgmt Net",
                "start": "172.29.9.64",
                "netmask": "255.255.255.192"
        },
    ];

    for (var i = 0; i < cerberus_bastion_subnets.length; i++)
    {
	if ( isInNet(host, cerberus_bastion_subnets[i].start, cerberus_bastion_subnets[i].netmask) )
		return cerberus_bastion_proxy;
    }


    // ACHE
    var ache_bastion_proxy = "SOCKS 127.0.0.1:7112";
// 141.142.168.62/26 - VLAN 1912 (ACHE Services Net)
// 192.168.30.102/16 - VLAN 1819 (ipmi)
// 10.156.0.3/29 - VLAN 1910 (mForge DTN RED)
// 10.156.1.19/24 - VLAN 1911 (mForge Interactive GREEN)

    var ache_bastion_subnets = [
        {
                "name": "ngale-ipmi",
                "start": "172.28.28.0",
                "netmask": "255.255.254.0"
        },
        {
                "name": "ache-services-net",
                "start": "141.142.168.0",
                "netmask": "255.255.255.192"
        },
	{
		"name": "mforge-ipmi",
		"start": "172.28.2.0",
		"netmask": "255.255.255.192"
	},
	{
		"name": "ache-ipmi",
		"start": "172.28.2.64",
		"netmask": "255.255.255.192"
	},
	{
		"name": "ache-mforge-access",
		"start": "172.28.2.128",
		"netmask": "255.255.255.192"
	},
	{
		"name": "ache-vmware-mgmt",
		"start": "172.28.2.192",
		"netmask": "255.255.255.192"
	},
	{
		"name": "ache-neteng-safetynet",
		"start": "172.28.3.0",
		"netmask": "255.255.255.192"
	},
	{
		"name": "ache-facilities-mgmt",
		"start": "172.28.3.64",
		"netmask": "255.255.255.192"
	},
	{
		"name": "mforge-archive-data",
		"start": "172.30.0.0",
		"netmask": "255.255.255.192"
	},
	{
		"name": "ache-vmware-vmotion",
		"start": "172.30.0.64",
		"netmask": "255.255.255.192"
	},
    ];

    for (var i = 0; i < ache_bastion_subnets.length; i++)
    {
	if ( isInNet(host, ache_bastion_subnets[i].start, ache_bastion_subnets[i].netmask) )
		return ache_bastion_proxy;
    }

    // Magnus
    var mgadm_proxy = "SOCKS 127.0.0.1:8111";
// 172.31.1.0/24 - VLAN ???? (IPMI)

    var mgadm_subnets = [
	{
		"name": "mg-ipmi",
		"start": "172.31.1.0",
		"netmask": "255.255.255.0"
	},
    ];

    for (var i = 0; i < mgadm_subnets.length; i++)
    {
	if ( isInNet(host, mgadm_subnets[i].start, mgadm_subnets[i].netmask) )
		return mgadm_proxy;
    }

    // Delta
    var delta_proxy = "SOCKS 127.0.0.1:8112";
// 172.28.24.0/23 - VLAN ???? (IPMI)

    var delta_subnets = [
	{
		"name": "delta-ipmi",
		"start": "172.28.24.0",
		"netmask": "255.255.254.0"
	},
    ];

    for (var i = 0; i < delta_subnets.length; i++)
    {
	if ( isInNet(host, delta_subnets[i].start, delta_subnets[i].netmask) )
		return delta_proxy;
    }

    // Holl-I
    var holli_proxy = "SOCKS 127.0.0.1:8118";

    var holli_subnets = [
	{
		"name": "holli-ipmi",
		"start": "172.28.40.0",
		"netmask": "255.255.255.192"
	},
    ];

    for (var i = 0; i < holli_subnets.length; i++)
    {
	if ( isInNet(host, holli_subnets[i].start, holli_subnets[i].netmask) )
		return holli_proxy;
    }

    var hli_login01_proxy = "SOCKS 127.0.0.1:8119";

    if ( host == "grafana.hli-ncsa-wsc.cerebrassc.local" )
        return hli_login01_proxy;

    var holli_login01_subnets = [
        {
                "name": "holli-appliance-production",
                "start": "172.29.23.0",
                "netmask": "255.255.255.0"
        },
    ];  

    for (var i = 0; i < holli_login01_subnets.length; i++)
    {           
        if ( isInNet(host, holli_login01_subnets[i].start, holli_login01_subnets[i].netmask) )
                return holli_login01_proxy;
    }           

    // ICCP
    var cc_proxy = "SOCKS 127.0.0.1:8211";

    var cc_subnets = [
	{
		"name": "iccp-ipmi-general",
		"start": "10.10.0.0",
		"netmask": "255.255.0.0"
	},
	{
		"name": "iccp-ipmi-golub",
		"start": "10.12.0.0",
		"netmask": "255.255.0.0"
	},
	{
		"name": "iccp-ipmi-10_60_31",
		"start": "10.60.31.0",
		"netmask": "255.255.255.0"
	},
	{
		"name": "iccp-ipmi-10_60_32",
		"start": "10.60.32.0",
		"netmask": "255.255.255.0"
	},
    	{
		"name": "iccp-ipmi-10_60_41",
		"start": "10.60.41.0",
		"netmask": "255.255.255.0"
	},
];

    for (var i = 0; i < cc_subnets.length; i++)
    {
	if ( isInNet(host, cc_subnets[i].start, cc_subnets[i].netmask) )
		return cc_proxy;
    }

    // Magnus (new)
    var mgadm01_proxy = "SOCKS 127.0.0.1:8113";

    var mgadm01_subnets = [
        {
                "name": "mg-ipmi",
                "start": "172.29.15.0",
                "netmask": "255.255.255.0"
        },
        {
                "name": "mg-facilities",
                "start": "172.28.16.160",
                "netmask": "255.255.255.224"
        },
    ];

    for (var i = 0; i < mgadm01_subnets.length; i++)
    {
        if ( isInNet(host, mgadm01_subnets[i].start, mgadm01_subnets[i].netmask) )
                return mgadm01_proxy;
    }

    // No match
    
    return "DIRECT";
}
