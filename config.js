let is_pro=!!Object.prototype.toString.call(com.stardust.autojs.core.timing.TimedTask.Companion).match(/Java(Class|Object)/),default_config={password:"",timeout_unlock:1e3,timeout_findOne:1e3,timeout_existing:8e3,async_waiting_capture:!0,capture_waiting_time:500,show_debug_log:!0,show_engine_id:!1,develop_mode:!1,develop_saving_mode:!1,enable_visual_helper:!1,check_device_posture:!1,check_distance:!1,posture_threshold_z:6,battery_keep_threshold:20,auto_lock:!1,lock_x:150,lock_y:970,auto_set_brightness:!1,dismiss_dialog_if_locked:!0,request_capture_permission:!0,capture_permission_button:"START NOW|立即开始|允许",save_log_file:!0,async_save_log_file:!0,back_size:"100",console_log_maximum_size:1500,enable_call_state_control:!1,single_script:!1,auto_restart_when_crashed:!1,useCustomScrollDown:!0,scrollDownSpeed:200,bottomHeight:200,skip_running_packages:[],warn_skipped_ignore_package:!1,warn_skipped_too_much:!1,auto_check_update:!1,github_url:"",github_latest_url:"",delayStartTime:5,device_width:device.width,device_height:device.height,is_pro,auto_set_bang_offset:!0,bang_offset:0,thread_name_prefix:"autoscript_",clear_webview_cache:!1},CONFIG_STORAGE_NAME="autoscript_version",PROJECT_NAME="AutoJS 脚手架",config={},storageConfig=storages.create(CONFIG_STORAGE_NAME);Object.keys(default_config).forEach((e=>{let t=storageConfig.get(e);config[e]=void 0!==t?t:default_config[e]})),config.overwrite=(e,t)=>{let _=CONFIG_STORAGE_NAME,o=e;if(e.indexOf(".")>-1){let i=e.split(".");if(_=CONFIG_STORAGE_NAME+"_"+i[0],e=i[1],o=i[0]+"_config",!config.hasOwnProperty(o)||!config[o].hasOwnProperty(e))return;config[o][e]=t}else{if(!config.hasOwnProperty(o))return;config[o]=t}console.verbose("覆写配置",_,e),storages.create(_).put(e,t)},module.exports={config,default_config,storage_name:CONFIG_STORAGE_NAME,project_name:PROJECT_NAME};