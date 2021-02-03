<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class KhaylaMaeUrata extends CI_Controller {


// 	function index() 
// 	{
// 		$this->load->view('index/index.php');
// 		$this->load->view('security/sec.php');
// 		$this->load->view('loadingpage/loadingpage.php');
		
// }

	function index() 
	{
		$this->load->view('jayvee/siuaganjayvee.php');
		$this->load->view('jayvee/link');
		$this->load->view('jayvee/script.php');

		// $this->load->view('security/sec.php');
		// $this->load->view('security/text.php');
		// $this->load->view('loadingpage/loadingpage.php');


}


}//end
