function FindProxyForURL(url, host) {

//  SSH bastion forwards
//    ssh -D 5111 lsst-adm01.ncsa.illinois.edu    ## LSST NPCF xCAT
//    ssh -D 5112 cerberus{1-4}.ncsa.illinois.edu
////    ssh -D 5113 lsst-pup-npcf.ncsa.illinois.edu    ## LSST NPCF Puppet
//    ssh -D 5114 lsst-adm01.ncsa.illinois.edu    ## LSST NCSA xCAT
////    ssh -D 6111 fadm2.ncsa.illinois.edu # actually c3 then ssh -4 -D 6111 fadm2
//    ssh -D 7111 ...madm2... # but use ab1 instead
//    ssh -D 7112 ab1
//    ssh -D 8111 mgadm.ncsa.illinois.edu

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
    var lsst_adm01_bastion_proxy = "SOCKS 127.0.0.1:5114";
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

    // LSST-ADM-NCSA
    var lsst_adm_ncsa_bastion_proxy = "SOCKS 127.0.0.1:8086";
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

    var cerberus_bastion_subnets = [
	{
		"name": "mgrs",
		"start": "141.142.161.134",
		"netmask": "255.255.255.255"
	},
	{
		"name": "mgrscon",
		"start": "141.142.161.135",
		"netmask": "255.255.255.255"
	},
	{
		"name": "mgrstest",
		"start": "141.142.161.136",
		"netmask": "255.255.255.255"
	},
	{
		"name": "mgrscontest",
		"start": "141.142.161.137",
		"netmask": "255.255.255.255"
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
                "name": "ncsa cmdb",
                "start": "141.142.192.26",
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
                "name": "ncsa jira-test",
                "start": "141.142.192.195",
                "netmask": "255.255.255.255"
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


    // No match
    
    return "DIRECT";
}
