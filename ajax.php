<?php
    header("Content-Type:text/plain;charset=utf-8");
    
    $staff=array(
        array("name"=>"serven","number"=>"101","sex"=>"man","job"=>"manager"),
        array("name"=>"guojin","number"=>"102","sex"=>"man","job"=>"develop"),
        array("name"=>"huangrong","number"=>"103","sex"=>"woman","job"=>"product")
    );

    if($_SERVER["REQUEST_METHOD"]=="GET"){
        search();
    }
    function search(){
        if(!isset($_GET["name"])||empty($_GET["name"])){
            echo "args error!";
            return;
        }

        global $staff;
        $name=$_GET["name"];
        $result="no staff!";

        foreach($staff as $value){
            if($value["name"]==$name){
                $result="finded staff:number:".$value["number"].",name:".$value["name"];
                break;
            }
        }
        echo $result;
    }

    ?>
