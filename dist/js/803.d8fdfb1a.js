"use strict";(self["webpackChunkvueproject"]=self["webpackChunkvueproject"]||[]).push([[803],{5803:function(e,t,a){a.r(t),a.d(t,{default:function(){return ta}});var l=a(3396),n=a(7139);const o={class:"page-content"},i={class:"m-page-header"},s=(0,l._)("div",{class:"m-page-title"},"Danh sách nhân viên",-1),r={class:"m-page-toolbar"},c=(0,l.uE)('<div class="m-page-toolbar-left"><div class="m-page-toolbar-item"><input type="text" class="m-input m-input-icon m-icon-search m-icon-16" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại"></div><div class="m-page-toolbar-item"><select name="" id="" class="m-select-box m-box-custom"><option value="all">Tất cả phòng ban</option><option value="nhansu">Phòng nhân sự</option><option value="daotao">Phòng đào tạo</option><option value="congnghe">Phòng công nghệ</option><option value="marketing">Phòng marketing</option></select><div class="m-select-box-icon"><i class="fas fa-chevron-down"></i></div></div><div class="m-page-toolbar-item"><select name="" id="" class="m-select-box m-box-custom"><option value="all">Tất cả</option><option value="giamdoc">Giám đốc</option><option value="thungan">Thu ngân</option><option value="nhanvien">Nhân viên</option></select><div class="m-select-box-icon"><i class="fas fa-chevron-down"></i></div></div></div>',1),d={class:"m-page-toolbar-right"},u={class:"m-page-toolbar-item"},m={class:"m-page-grid"},p={class:"m-table",id:"tblEmployee",keyId:"EmployeeCode","aria-label":""},h=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"text-align-left",fieldName:"EmployeeCode",style:{width:"40px"}}," Mã nhân viên "),(0,l._)("th",{class:"text-align-left",fieldName:"FullName",style:{width:"60px"}}," Họ và tên "),(0,l._)("th",{class:"text-align-left",fieldName:"Gender",formatType:"gender",style:{width:"10px"}}," Giới tính "),(0,l._)("th",{class:"text-align-center",fieldName:"DateOfBirth",formatType:"ddmmyyyy",style:{width:"50px"}}," Ngày sinh "),(0,l._)("th",{class:"text-align-left",fieldName:"PhoneNumber",style:{width:"50px"}}," Điện thoại "),(0,l._)("th",{class:"text-align-left",fieldName:"Email",style:{width:"50px"}}," Email "),(0,l._)("th",{class:"text-align-left",fieldName:"PositionName",style:{width:"40px"}}," Chức vụ "),(0,l._)("th",{class:"text-align-left",fieldName:"DepartmentName",style:{width:"50px"}}," Phòng ban "),(0,l._)("th",{class:"text-align-right",fieldName:"Salary",formatType:"money",style:{width:"50px"}}," Mức lương cơ bản "),(0,l._)("th",{class:"text-align-left",fieldName:"WorkStatus",style:{width:"50px"}}," Tình trạng công việc ")])],-1),v=["onDblclick"],g={class:"text-align-left"},f={class:"text-align-left"},$={class:"text-align-center"},y={class:"text-align-center"},b={class:"text-align-left"},_={class:"text-align-left"},w={class:"text-align-left"},D={class:"text-align-left"},C={class:"text-align-right"},S={class:"text-align-left"},x=(0,l.uE)('<div class="m-paging"><div class="m-paging-left">Hiển thị 1-100 lao động</div><div class="m-paging-center"><button class="m-btn-first"></button><button class="m-btn-prev"></button><div class="m-page-number-group"><button class="m-page-number m-page-1 m-page-number-selected"> 1 </button><button class="m-page-number m-page-2">2</button><button class="m-page-number m-page-3">3</button></div><button class="m-btn-next"></button><button class="m-btn-last"></button></div><div class="m-paging-right"><select class="m-select-box m-box-custom"><option value="10">10 nhân viên/trang</option><option value="20">20 nhân viên/trang</option><option value="50">50 nhân viên/trang</option></select><div class="m-select-box-icon"><i class="fas fa-chevron-down"></i></div></div></div>',1),k=(0,l._)("div",{class:"m-loading-icon"},null,-1),E=[k];function O(e,t,a,k,O,N){const P=(0,l.up)("EmployeeDetail");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",o,[(0,l._)("div",i,[s,(0,l._)("button",{class:"m-btn m-btn-icon m-btn-icon-add",id:"btnAdd",onClick:t[0]||(t[0]=(...e)=>N.btnAddOnClick&&N.btnAddOnClick(...e))}," Thêm thành viên ")]),(0,l._)("div",r,[c,(0,l._)("div",d,[(0,l._)("div",u,[(0,l._)("button",{class:"m-btn-refresh",id:"btnRefresh",onClick:t[1]||(t[1]=(...e)=>N.btnRefreshOnClick&&N.btnRefreshOnClick(...e))})])])]),(0,l._)("div",m,[(0,l._)("table",p,[h,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(O.employeeList,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.EmployeeId,onDblclick:t=>N.rowOnDblClick(e)},[(0,l._)("td",g,(0,n.zw)(e.EmployeeCode),1),(0,l._)("td",f,(0,n.zw)(e.FullName),1),(0,l._)("td",$,(0,n.zw)(N.formatGender(e.Gender)),1),(0,l._)("td",y,(0,n.zw)(N.formatDate(e.DateOfBirth)),1),(0,l._)("td",b,(0,n.zw)(e.PhoneNumber),1),(0,l._)("td",_,(0,n.zw)(e.Email),1),(0,l._)("td",w,(0,n.zw)(e.PositionName),1),(0,l._)("td",D,(0,n.zw)(e.DepartmentName),1),(0,l._)("td",C,(0,n.zw)(N.formatSalary(e.Salary)),1),(0,l._)("td",S,(0,n.zw)(N.formatWorkStatus(e.WorkStatus)),1)],40,v)))),128))])]),x])]),(0,l.Wm)(P,{employeeSelected:O.employeeSelected,employeeSelectedId:O.employeeSelectedId,isShow:O.isShowDialog,onIsShowDialog:N.showDialogEmployeeDetail,formDetailMode:O.formDetailMode,onChildMethodCall:N.loadData},null,8,["employeeSelected","employeeSelectedId","isShow","onIsShowDialog","formDetailMode","onChildMethodCall"]),(0,l._)("div",{class:(0,n.C_)(["m-loading",{isLoading:O.isLoading}])},E,2)],64)}var N=a(4161),P=a(9242);const j={class:"m-add-modal-content"},U=(0,l._)("i",{class:"fas fa-times"},null,-1),I=[U],T=(0,l._)("div",{class:"m-add-modal-header"},[(0,l._)("div",{class:"m-modal-title"},"THÔNG TIN NHÂN VIÊN")],-1),F={class:"m-add-modal-body"},V=(0,l._)("div",{class:"m-add-modal-avatar"},[(0,l._)("div",{class:"avatar-img"}),(0,l._)("div",{class:"avatar-info"}," Vui lòng chọn ảnh có định dạng .jpg .jpeg .png .gif ")],-1),R={class:"m-add-modal-info"},M=(0,l._)("div",{class:"info-title"},"A. THÔNG TIN CHUNG",-1),H={class:"general-info"},L={class:"info-item"},z=(0,l._)("p",null,"Mã nhân viên(*)",-1),A={class:"info-item"},G=(0,l._)("p",null,"Họ và tên",-1),q={class:"info-item"},B=(0,l._)("p",null,"Ngày sinh",-1),W={class:"info-item"},Y=(0,l._)("p",null,"Giới tính",-1),J=(0,l._)("option",{value:"0"},"Nam",-1),Z=(0,l._)("option",{value:"1"},"Nữ",-1),K=(0,l._)("option",{value:"2"},"Khác",-1),X=[J,Z,K],Q={class:"info-item"},ee=(0,l._)("p",null,"Số CMTND/Căn cước (*)",-1),te={class:"info-item"},ae=(0,l._)("p",null,"Ngày cấp",-1),le={class:"info-item"},ne=(0,l._)("p",null,"Nơi cấp",-1),oe={class:"info-item"},ie=(0,l._)("p",null,"Email (*)",-1),se={class:"info-item"},re=(0,l._)("p",null,"Số điện thoại (*)",-1),ce=(0,l._)("div",{class:"info-title"},"B. THÔNG TIN CÔNG VIỆC",-1),de={class:"work-info"},ue={class:"info-item"},me=(0,l._)("p",null,"Vị trí",-1),pe=(0,l.uE)('<option value="">Tất cả</option><option value="30d41e52-5e66-72bc-6c1c-b47866e0b131"> Trưởng Phòng </option><option value="589edf01-198a-4ff5-958e-fb52fd75a1d4"> Nhân Viên </option><option value="5bd71cda-209f-2ade-54d1-35c781481818"> Trưởng Nhóm </option><option value="548dce5f-5f29-4617-725d-e2ec561b0f41"> Quản Trị Hệ Thống </option>',5),he=[pe],ve={class:"info-item"},ge=(0,l._)("p",null,"Phòng ban",-1),fe=(0,l.uE)('<option value="">Tất cả phòng ban</option><option value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7"> Phòng nhân sự </option><option value="45ac3d26-18f2-18a9-3031-644313fbb055"> Phòng Hành Chính </option><option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c"> Phòng Công Nghệ Thông Tin </option><option value="7c4f14d8-66fb-14ae-198f-6354f958f4c0"> Phòng Kế Toán </option>',5),$e=[fe],ye={class:"info-item"},be=(0,l._)("p",null,"Mã số thuế cá nhân",-1),_e={class:"info-item"},we=(0,l._)("p",null,"Mức lương cơ bản",-1),De={class:"info-item"},Ce=(0,l._)("p",null,"Ngày gia nhập công ty",-1),Se={class:"info-item"},xe=(0,l._)("p",null,"Tình trạng công việc",-1),ke=(0,l._)("option",{value:"0"},"Đang làm việc",-1),Ee=(0,l._)("option",{value:"1"},"Đã nghỉ việc",-1),Oe=(0,l._)("option",{value:"2"},"Đang thử việc",-1),Ne=(0,l._)("option",{value:"3"},"Đã nghỉ hưu",-1),Pe=[ke,Ee,Oe,Ne],je={class:"m-add-modal-footer"},Ue={class:"m-modal-footer-left"},Ie={class:"m-modal-footer-right"},Te=(0,l._)("button",{class:"m-btn m-btn-modal m-btn-cancel",id:"btnCancel"}," Hủy ",-1),Fe=(0,l._)("i",{class:"far fa-save"},null,-1);function Ve(e,t,a,o,i,s){const r=(0,l.up)("ThePopup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{class:(0,n.C_)(["m-dialog m-add-modal",{isShowDialog:a.isShow}])},[(0,l._)("div",j,[(0,l._)("div",{class:"m-modal-close",id:"btnClose",onClick:t[0]||(t[0]=(...e)=>s.btnCloseOnClick&&s.btnCloseOnClick(...e))},I),T,(0,l._)("div",F,[V,(0,l._)("div",R,[M,(0,l._)("div",H,[(0,l._)("div",L,[z,(0,l.wy)((0,l._)("input",{type:"text",class:(0,n.C_)(["m-input m-modal-input",{"m-input-error":i.v$.employee.EmployeeCode.$error}]),id:"txtEmployeeCode",ref:"txtEmployeeCode","onUpdate:modelValue":t[1]||(t[1]=e=>i.employee.EmployeeCode=e),placeholder:"Nhập mã nhân viên",required:""},null,2),[[P.nr,i.employee.EmployeeCode]])]),(0,l._)("div",A,[G,(0,l.wy)((0,l._)("input",{type:"text",class:"m-input m-modal-input",id:"txtFullName","onUpdate:modelValue":t[2]||(t[2]=e=>i.employee.FullName=e),placeholder:"Nhập họ và tên",required:""},null,512),[[P.nr,i.employee.FullName]])]),(0,l._)("div",q,[B,(0,l.wy)((0,l._)("input",{type:"date",class:"m-input m-input-date m-modal-input",id:"txtDateOfBirth","onUpdate:modelValue":t[3]||(t[3]=e=>i.employee.DateOfBirth=e)},null,512),[[P.nr,i.employee.DateOfBirth]])]),(0,l._)("div",W,[Y,(0,l.wy)((0,l._)("select",{value:"",class:"m-select-box",id:"cbGender","onUpdate:modelValue":t[4]||(t[4]=e=>i.employee.Gender=e)},X,512),[[P.bM,i.employee.Gender]])]),(0,l._)("div",Q,[ee,(0,l.wy)((0,l._)("input",{type:"text",class:(0,n.C_)(["m-input m-modal-input",{"m-input-error":i.v$.employee.IdentityNumber.$error}]),"onUpdate:modelValue":t[5]||(t[5]=e=>i.employee.IdentityNumber=e),placeholder:"Nhập mã CMTND/CCCD",required:""},null,2),[[P.nr,i.employee.IdentityNumber]])]),(0,l._)("div",te,[ae,(0,l.wy)((0,l._)("input",{type:"date",class:"m-input m-modal-input",placeholder:"Nhập ngày cấp","onUpdate:modelValue":t[6]||(t[6]=e=>i.employee.IdentityDate=e)},null,512),[[P.nr,i.employee.IdentityDate]])]),(0,l._)("div",le,[ne,(0,l.wy)((0,l._)("input",{type:"text",class:"m-input m-modal-input",placeholder:"Nhập nơi cấp","onUpdate:modelValue":t[7]||(t[7]=e=>i.employee.IdentityPlace=e)},null,512),[[P.nr,i.employee.IdentityPlace]])]),(0,l._)("div",oe,[ie,(0,l.wy)((0,l._)("input",{type:"text",class:(0,n.C_)(["m-input m-modal-input",{"m-input-error":i.v$.employee.Email.$error}]),id:"txtEmail","onUpdate:modelValue":t[8]||(t[8]=e=>i.employee.Email=e),placeholder:"Nhập Email",required:""},null,2),[[P.nr,i.employee.Email]])]),(0,l._)("div",se,[re,(0,l.wy)((0,l._)("input",{type:"text",class:(0,n.C_)(["m-input m-modal-input",{"m-input-error":i.v$.employee.PhoneNumber.$error}]),id:"txtPhoneNumber","onUpdate:modelValue":t[9]||(t[9]=e=>i.employee.PhoneNumber=e),placeholder:"Nhập số điện thoại",required:""},null,2),[[P.nr,i.employee.PhoneNumber]])])]),ce,(0,l._)("div",de,[(0,l._)("div",ue,[me,(0,l.wy)((0,l._)("select",{name:"",id:"cbPositionName","onUpdate:modelValue":t[10]||(t[10]=e=>i.employee.PositionId=e),class:"m-select-box"},he,512),[[P.bM,i.employee.PositionId]])]),(0,l._)("div",ve,[ge,(0,l.wy)((0,l._)("select",{name:"",id:"cbDepartmentName","onUpdate:modelValue":t[11]||(t[11]=e=>i.employee.DepartmentId=e),class:"m-select-box"},$e,512),[[P.bM,i.employee.DepartmentId]])]),(0,l._)("div",ye,[be,(0,l.wy)((0,l._)("input",{type:"text",class:"m-input m-modal-input",placeholder:"Nhập mã số thuế cá nhân","onUpdate:modelValue":t[12]||(t[12]=e=>i.employee.PersonalTaxCode=e)},null,512),[[P.nr,i.employee.PersonalTaxCode]])]),(0,l._)("div",_e,[we,(0,l.wy)((0,l._)("input",{type:"text",id:"txtSalary","onUpdate:modelValue":t[13]||(t[13]=e=>i.employee.Salary=e),class:"m-input m-modal-input",placeholder:"Nhập mức lương cơ bản"},null,512),[[P.nr,i.employee.Salary]])]),(0,l._)("div",De,[Ce,(0,l.wy)((0,l._)("input",{type:"date",class:"m-input m-modal-input","onUpdate:modelValue":t[14]||(t[14]=e=>i.employee.JoinDate=e)},null,512),[[P.nr,i.employee.JoinDate]])]),(0,l._)("div",Se,[xe,(0,l.wy)((0,l._)("select",{name:"",id:"cbWorkStatus","onUpdate:modelValue":t[15]||(t[15]=e=>i.employee.WorkStatus=e),class:"m-select-box"},Pe,512),[[P.bM,i.employee.WorkStatus]])])])])]),(0,l._)("div",je,[(0,l._)("div",Ue,[(0,l._)("button",{class:(0,n.C_)(["m-btn m-btn-modal m-btn-detele",{isHideButton:1==a.formDetailMode}]),id:"btnDelete",onClick:t[16]||(t[16]=(...e)=>s.btnDeleteOnClick&&s.btnDeleteOnClick(...e))}," Xóa ",2)]),(0,l._)("div",Ie,[Te,(0,l._)("button",{class:"m-btn m-btn-modal m-btn-save",id:"btnSave",onClick:t[17]||(t[17]=(...e)=>s.btnSaveOnClick&&s.btnSaveOnClick(...e))},[Fe,(0,l.Uk)("Lưu ")])])])])],2),(0,l.Wm)(r,{isShowDelete:i.isDelete,isShowWarning:i.isWarning,onConfirmDelete:s.deleteEmployee,onIsShowDialog:s.showDialogConfirmDelete},null,8,["isShowDelete","isShowWarning","onConfirmDelete","onIsShowDialog"])],64)}const Re=(0,l.uE)('<div class="m-dialog-content"><div class="m-dialog-header"><div class="m-dialog-title">Đóng form thông tin chung</div><div class="m-dialog-close"><i class="fas fa-times"></i></div></div><div class="m-dialog-body"><div class="m-dialog-icon"><i class="fas fa-exclamation-triangle"></i></div><div class="m-dialog-text"> Bạn có chắc chắn muốn đóng form thông tin chung? </div></div><div class="m-dialog-footer"><button class="m-btn m-dialog-button-negative" id=""> Tiếp tục nhập </button><button class="m-btn m-dialog-button-positive" id=""> Đóng </button></div></div>',1),Me=[Re],He={class:"m-dialog-content"},Le={class:"m-dialog-header"},ze=(0,l._)("div",{class:"m-dialog-title"},"Xoá bản ghi A",-1),Ae=(0,l._)("i",{class:"fas fa-times"},null,-1),Ge=[Ae],qe=(0,l._)("div",{class:"m-dialog-body"},[(0,l._)("div",{class:"m-dialog-icon"},[(0,l._)("i",{class:"fas fa-exclamation-triangle"})]),(0,l._)("div",{class:"m-dialog-text"}," Bạn có chắc chắn muốn xóa bản ghi A ")],-1),Be={class:"m-dialog-footer"},We=(0,l.uE)('<div class="m-dialog-content"><div class="m-dialog-header"><div class="m-dialog-title">Pop-up thông báo</div><div class="m-dialog-close" id="dialogInfo-btnClose"><i class="fas fa-times"></i></div></div><div class="m-dialog-body"><div class="m-dialog-text"> Hiện bạn chưa thiết lập USB Token. Vui lòng thiết lập kết nối với USB Token để ký nộp các hồ sơ </div></div><div class="m-dialog-footer"><button class="m-btn m-dialog-button-positive" id=""> Đóng </button></div></div>',1),Ye=[We];function Je(e,t,a,o,i,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{class:(0,n.C_)(["m-popup-dialog m-dialog-warning",{isShowDialog:a.isShowWarning}])},Me,2),(0,l._)("div",{class:(0,n.C_)(["m-popup-dialog m-dialog-delete",{isShowDialog:a.isShowDelete}])},[(0,l._)("div",He,[(0,l._)("div",Le,[ze,(0,l._)("div",{class:"m-dialog-close",onClick:t[0]||(t[0]=(...e)=>s.btnCloseOnClick&&s.btnCloseOnClick(...e))},Ge)]),qe,(0,l._)("div",Be,[(0,l._)("button",{class:"m-btn m-dialog-button-negative",onClick:t[1]||(t[1]=(...e)=>s.btnCloseOnClick&&s.btnCloseOnClick(...e))}," Hủy "),(0,l._)("button",{class:"m-btn m-dialog-button-positive",onClick:t[2]||(t[2]=(...e)=>s.btnConfirmDelete&&s.btnConfirmDelete(...e))}," Xóa ")])])],2),(0,l._)("div",{class:(0,n.C_)(["m-popup-dialog m-dialog-info",{isShowDialog:a.isShowInfo}])},Ye,2)],64)}var Ze={name:"ThePopup",data(){return{}},emits:["confirmDelete","isShowDialog"],props:{isShowWarning:{type:Boolean,default:!1},isShowDelete:{type:Boolean,default:!1},isShowInfo:{type:Boolean,default:!1}},methods:{btnConfirmDelete(){this.$emit("confirmDelete")},btnCloseOnClick(){this.$emit("isShowDialog",!1)}}},Ke=a(89);const Xe=(0,Ke.Z)(Ze,[["render",Je]]);var Qe=Xe,et=(a(7658),a(4870));function tt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function at(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(a),!0).forEach((function(t){lt(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):tt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function lt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function nt(e){return"function"===typeof e}function ot(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function it(e){return nt(e.$validator)?at({},e):{$validator:e}}function st(e){return"object"===typeof e?e.$valid:e}function rt(e){return e.$validator||e}function ct(e,t){if(!ot(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!ot(t)&&!nt(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=it(t);return a.$params=at(at({},a.$params||{}),e),a}function dt(e,t){if(!nt(e)&&"string"!==typeof(0,et.SU)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!ot(t)&&!nt(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const a=it(t);return a.$message=e,a}function ut(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const a=it(e);return at(at({},a),{},{$async:!0,$watchTargets:t})}function mt(e){return{$validator(t){for(var a=arguments.length,l=new Array(a>1?a-1:0),n=1;n<a;n++)l[n-1]=arguments[n];return(0,et.SU)(t).reduce(((t,a,n)=>{const o=Object.entries(a).reduce(((t,o)=>{let[i,s]=o;const r=e[i]||{},c=Object.entries(r).reduce(((e,t)=>{let[o,r]=t;const c=rt(r),d=c.call(this,s,a,n,...l),u=st(d);if(e.$data[o]=d,e.$data.$invalid=!u||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!u){let t=r.$message||"";const a=r.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!u,$params:a,$model:s,$response:d})),e.$errors.push({$property:i,$message:t,$params:a,$response:d,$model:s,$pending:!1,$validator:o})}return{$valid:e.$valid&&u,$data:e.$data,$errors:e.$errors}}),{$valid:!0,$data:{},$errors:[]});return t.$data[i]=c.$data,t.$errors[i]=c.$errors,{$valid:t.$valid&&c.$valid,$data:t.$data,$errors:t.$errors}}),{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&o.$valid,$data:t.$data.concat(o.$data),$errors:t.$errors.concat(o.$errors)}}),{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map((e=>Object.values(e).map((e=>e.map((e=>e.$message)))).reduce(((e,t)=>e.concat(t)),[]))):[]}}}const pt=e=>{if(e=(0,et.SU)(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},ht=e=>(e=(0,et.SU)(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function vt(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return e=>(e=(0,et.SU)(e),!pt(e)||t.every((t=>(t.lastIndex=0,t.test(e)))))}et.SU,vt(/^[a-zA-Z]*$/),vt(/^[a-zA-Z0-9]*$/),vt(/^\d*(\.\d+)?$/);const gt=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var ft=vt(gt),$t={$validator:ft,$message:"Value is not a valid email address",$params:{type:"email"}};function yt(e){return"string"===typeof e&&(e=e.trim()),pt(e)}var bt={$validator:yt,$message:"Value is required",$params:{type:"required"}};const _t=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;vt(_t);vt(/(^[0-9]*$)|(^-[0-9]+$)/),vt(/^[-]?\d*(\.\d+)?$/);function wt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function Dt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?wt(Object(a),!0).forEach((function(t){Ct(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):wt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ct(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function St(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((a,l)=>(t.includes(l)||(a[l]=(0,et.SU)(e[l])),a)),{})}function xt(e){return"function"===typeof e}function kt(e){return(0,et.PG)(e)||(0,et.$y)(e)}function Et(e,t,a){let l=e;const n=t.split(".");for(let o=0;o<n.length;o++){if(!l[n[o]])return a;l=l[n[o]]}return l}function Ot(e,t,a){return(0,l.Fl)((()=>e.some((e=>Et(t,e,{[a]:!1})[a]))))}function Nt(e,t,a){return(0,l.Fl)((()=>e.reduce(((e,l)=>{const n=Et(t,l,{[a]:!1})[a]||[];return e.concat(n)}),[])))}function Pt(e,t,a,l){return e.call(l,(0,et.SU)(t),(0,et.SU)(a),l)}function jt(e){return void 0!==e.$valid?!e.$valid:!e}function Ut(e,t,a,n,o,i,s){let{$lazy:r,$rewardEarly:c}=o,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,m=arguments.length>9?arguments[9]:void 0,p=arguments.length>10?arguments[10]:void 0;const h=(0,et.iH)(!!n.value),v=(0,et.iH)(0);a.value=!1;const g=(0,l.YP)([t,n].concat(d,p),(()=>{if(r&&!n.value||c&&!m.value&&!a.value)return;let l;try{l=Pt(e,t,u,s)}catch(o){l=Promise.reject(o)}v.value++,a.value=!!v.value,h.value=!1,Promise.resolve(l).then((e=>{v.value--,a.value=!!v.value,i.value=e,h.value=jt(e)})).catch((e=>{v.value--,a.value=!!v.value,i.value=e,h.value=!0}))}),{immediate:!0,deep:"object"===typeof t});return{$invalid:h,$unwatch:g}}function It(e,t,a,n,o,i,s,r){let{$lazy:c,$rewardEarly:d}=n;const u=()=>({}),m=(0,l.Fl)((()=>{if(c&&!a.value||d&&!r.value)return!1;let l=!0;try{const a=Pt(e,t,s,i);o.value=a,l=jt(a)}catch(n){o.value=n}return l}));return{$unwatch:u,$invalid:m}}function Tt(e,t,a,n,o,i,s,r,c,d,u){const m=(0,et.iH)(!1),p=e.$params||{},h=(0,et.iH)(null);let v,g;e.$async?({$invalid:v,$unwatch:g}=Ut(e.$validator,t,m,a,n,h,o,e.$watchTargets,c,d,u)):({$invalid:v,$unwatch:g}=It(e.$validator,t,a,n,h,o,c,d));const f=e.$message,$=xt(f)?(0,l.Fl)((()=>f(St({$pending:m,$invalid:v,$params:St(p),$model:t,$response:h,$validator:i,$propertyPath:r,$property:s})))):f||"";return{$message:$,$params:p,$pending:m,$invalid:v,$response:h,$unwatch:g}}function Ft(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,et.SU)(e),a=Object.keys(t),l={},n={},o={};let i=null;return a.forEach((e=>{const a=t[e];switch(!0){case xt(a.$validator):l[e]=a;break;case xt(a):l[e]={$validator:a};break;case"$validationGroups"===e:i=a;break;case e.startsWith("$"):o[e]=a;break;default:n[e]=a}})),{rules:l,nestedValidators:n,config:o,validationGroups:i}}const Vt="__root";function Rt(e,t,a,n,o,i,s,r,c){const d=Object.keys(e),u=n.get(o,e),m=(0,et.iH)(!1),p=(0,et.iH)(!1),h=(0,et.iH)(0);if(u){if(!u.$partial)return u;u.$unwatch(),m.value=u.$dirty.value}const v={$dirty:m,$path:o,$touch:()=>{m.value||(m.value=!0)},$reset:()=>{m.value&&(m.value=!1)},$commit:()=>{}};return d.length?(d.forEach((l=>{v[l]=Tt(e[l],t,v.$dirty,i,s,l,a,o,c,p,h)})),v.$externalResults=(0,l.Fl)((()=>r.value?[].concat(r.value).map(((e,t)=>({$propertyPath:o,$property:a,$validator:"$externalResults",$uid:`${o}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),v.$invalid=(0,l.Fl)((()=>{const e=d.some((e=>(0,et.SU)(v[e].$invalid)));return p.value=e,!!v.$externalResults.value.length||e})),v.$pending=(0,l.Fl)((()=>d.some((e=>(0,et.SU)(v[e].$pending))))),v.$error=(0,l.Fl)((()=>!!v.$dirty.value&&(v.$pending.value||v.$invalid.value))),v.$silentErrors=(0,l.Fl)((()=>d.filter((e=>(0,et.SU)(v[e].$invalid))).map((e=>{const t=v[e];return(0,et.qj)({$propertyPath:o,$property:a,$validator:e,$uid:`${o}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(v.$externalResults.value))),v.$errors=(0,l.Fl)((()=>v.$dirty.value?v.$silentErrors.value:[])),v.$unwatch=()=>d.forEach((e=>{v[e].$unwatch()})),v.$commit=()=>{p.value=!0,h.value=Date.now()},n.set(o,e,v),v):(u&&n.set(o,e,v),v)}function Mt(e,t,a,l,n,o,i){const s=Object.keys(e);return s.length?s.reduce(((s,r)=>(s[r]=Lt({validations:e[r],state:t,key:r,parentKey:a,resultsCache:l,globalConfig:n,instance:o,externalResults:i}),s)),{}):{}}function Ht(e,t,a){const n=(0,l.Fl)((()=>[t,a].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values((0,et.SU)(t)))),[]))),o=(0,l.Fl)({get(){return e.$dirty.value||!!n.value.length&&n.value.every((e=>e.$dirty))},set(t){e.$dirty.value=t}}),i=(0,l.Fl)((()=>{const t=(0,et.SU)(e.$silentErrors)||[],a=n.value.filter((e=>((0,et.SU)(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(a)})),s=(0,l.Fl)((()=>{const t=(0,et.SU)(e.$errors)||[],a=n.value.filter((e=>((0,et.SU)(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(a)})),r=(0,l.Fl)((()=>n.value.some((e=>e.$invalid))||(0,et.SU)(e.$invalid)||!1)),c=(0,l.Fl)((()=>n.value.some((e=>(0,et.SU)(e.$pending)))||(0,et.SU)(e.$pending)||!1)),d=(0,l.Fl)((()=>n.value.some((e=>e.$dirty))||n.value.some((e=>e.$anyDirty))||o.value)),u=(0,l.Fl)((()=>!!o.value&&(c.value||r.value))),m=()=>{e.$touch(),n.value.forEach((e=>{e.$touch()}))},p=()=>{e.$commit(),n.value.forEach((e=>{e.$commit()}))},h=()=>{e.$reset(),n.value.forEach((e=>{e.$reset()}))};return n.value.length&&n.value.every((e=>e.$dirty))&&m(),{$dirty:o,$errors:s,$invalid:r,$anyDirty:d,$error:u,$pending:c,$touch:m,$reset:h,$silentErrors:i,$commit:p}}function Lt(e){let{validations:t,state:a,key:n,parentKey:o,childResults:i,resultsCache:s,globalConfig:r={},instance:c,externalResults:d}=e;const u=o?`${o}.${n}`:n,{rules:m,nestedValidators:p,config:h,validationGroups:v}=Ft(t),g=Dt(Dt({},r),h),f=n?(0,l.Fl)((()=>{const e=(0,et.SU)(a);return e?(0,et.SU)(e[n]):void 0})):a,$=Dt({},(0,et.SU)(d)||{}),y=(0,l.Fl)((()=>{const e=(0,et.SU)(d);return n?e?(0,et.SU)(e[n]):void 0:e})),b=Rt(m,f,n,s,u,g,c,y,a),_=Mt(p,f,u,s,g,c,y),w={};v&&Object.entries(v).forEach((e=>{let[t,a]=e;w[t]={$invalid:Ot(a,_,"$invalid"),$error:Ot(a,_,"$error"),$pending:Ot(a,_,"$pending"),$errors:Nt(a,_,"$errors"),$silentErrors:Nt(a,_,"$silentErrors")}}));const{$dirty:D,$errors:C,$invalid:S,$anyDirty:x,$error:k,$pending:E,$touch:O,$reset:N,$silentErrors:P,$commit:j}=Ht(b,_,i),U=n?(0,l.Fl)({get:()=>(0,et.SU)(f),set:e=>{D.value=!0;const t=(0,et.SU)(a),l=(0,et.SU)(d);l&&(l[n]=$[n]),(0,et.dq)(t[n])?t[n].value=e:t[n]=e}}):null;async function I(){return O(),g.$rewardEarly&&(j(),await(0,l.Y3)()),await(0,l.Y3)(),new Promise((e=>{if(!E.value)return e(!S.value);const t=(0,l.YP)(E,(()=>{e(!S.value),t()}))}))}function T(e){return(i.value||{})[e]}function F(){(0,et.dq)(d)?d.value=$:0===Object.keys($).length?Object.keys(d).forEach((e=>{delete d[e]})):Object.assign(d,$)}return n&&g.$autoDirty&&(0,l.YP)(f,(()=>{D.value||O();const e=(0,et.SU)(d);e&&(e[n]=$[n])}),{flush:"sync"}),(0,et.qj)(Dt(Dt(Dt({},b),{},{$model:U,$dirty:D,$error:k,$errors:C,$invalid:S,$anyDirty:x,$pending:E,$touch:O,$reset:N,$path:u||Vt,$silentErrors:P,$validate:I,$commit:j},i&&{$getResultsForChild:T,$clearExternalResults:F,$validationGroups:w}),_))}class zt{constructor(){this.storage=new Map}set(e,t,a){this.storage.set(e,{rules:t,result:a})}checkRulesValidity(e,t,a){const l=Object.keys(a),n=Object.keys(t);if(n.length!==l.length)return!1;const o=n.every((e=>l.includes(e)));return!!o&&n.every((e=>!t[e].$params||Object.keys(t[e].$params).every((l=>(0,et.SU)(a[e].$params[l])===(0,et.SU)(t[e].$params[l])))))}get(e,t){const a=this.storage.get(e);if(!a)return;const{rules:l,result:n}=a,o=this.checkRulesValidity(e,t,l),i=n.$unwatch?n.$unwatch:()=>({});return o?n:{$dirty:n.$dirty,$partial:!0,$unwatch:i}}}const At={COLLECT_ALL:!0,COLLECT_NONE:!1},Gt=Symbol("vuelidate#injectChildResults"),qt=Symbol("vuelidate#removeChildResults");function Bt(e){let{$scope:t,instance:a}=e;const n={},o=(0,et.iH)([]),i=(0,l.Fl)((()=>o.value.reduce(((e,t)=>(e[t]=(0,et.SU)(n[t]),e)),{})));function s(e,a){let{$registerAs:l,$scope:i,$stopPropagation:s}=a;s||t===At.COLLECT_NONE||i===At.COLLECT_NONE||t!==At.COLLECT_ALL&&t!==i||(n[l]=e,o.value.push(l))}function r(e){o.value=o.value.filter((t=>t!==e)),delete n[e]}a.__vuelidateInjectInstances=[].concat(a.__vuelidateInjectInstances||[],s),a.__vuelidateRemoveInstances=[].concat(a.__vuelidateRemoveInstances||[],r);const c=(0,l.f3)(Gt,[]);(0,l.JJ)(Gt,a.__vuelidateInjectInstances);const d=(0,l.f3)(qt,[]);return(0,l.JJ)(qt,a.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:c,removeValidationResultsFromParent:d}}function Wt(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?Wt(e[t]):(0,l.Fl)((()=>e[t]))}})}let Yt=0;function Jt(e,t){var a;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(n=e,e=void 0,t=void 0);let{$registerAs:o,$scope:i=At.COLLECT_ALL,$stopPropagation:s,$externalResults:r,currentVueInstance:c}=n;const d=c||(null===(a=(0,l.FN)())||void 0===a?void 0:a.proxy),u=d?d.$options:{};o||(Yt+=1,o=`_vuelidate_${Yt}`);const m=(0,et.iH)({}),p=new zt,{childResults:h,sendValidationResultsToParent:v,removeValidationResultsFromParent:g}=d?Bt({$scope:i,instance:d}):{childResults:(0,et.iH)({})};if(!e&&u.validations){const e=u.validations;t=(0,et.iH)({}),(0,l.wF)((()=>{t.value=d,(0,l.YP)((()=>xt(e)?e.call(t.value,new Wt(t.value)):e),(e=>{m.value=Lt({validations:e,state:t,childResults:h,resultsCache:p,globalConfig:n,instance:d,externalResults:r||d.vuelidateExternalResults})}),{immediate:!0})})),n=u.validationsConfig||n}else{const a=(0,et.dq)(e)||kt(e)?e:(0,et.qj)(e||{});(0,l.YP)(a,(e=>{m.value=Lt({validations:e,state:t,childResults:h,resultsCache:p,globalConfig:n,instance:null!==d&&void 0!==d?d:{},externalResults:r})}),{immediate:!0})}return d&&(v.forEach((e=>e(m,{$registerAs:o,$scope:i,$stopPropagation:s}))),(0,l.Jd)((()=>g.forEach((e=>e(o)))))),(0,l.Fl)((()=>Dt(Dt({},(0,et.SU)(m.value)),h.value)))}var Zt={mounted(){},beforeUpdate(){this.employee.DateOfBirth=this.formatDate(this.employee.DateOfBirth),this.employee.IdentityDate=this.formatDate(this.employee.IdentityDate),this.employee.JoinDate=this.formatDate(this.employee.JoinDate),this.isShow&&this.$nextTick((()=>{this.$refs.txtEmployeeCode.focus()}))},updated(){this.v$.$touch()},validations(){return{employee:{EmployeeCode:{required:bt},FullName:{required:bt},Email:{required:bt,email:$t},PhoneNumber:{required:bt},IdentityNumber:{required:bt}}}},emits:["isShowDialog","childMethodCall"],methods:{submitForm(){if(this.v$.$errors.length>0)for(const e of this.v$.$errors)alert(e.$message);else this.saveData();console.log(this.v$.$errors)},btnCloseOnClick(){this.$emit("isShowDialog",!1)},btnSaveOnClick(){this.submitForm()},btnDeleteOnClick(){this.isDelete=!0},showDialogConfirmDelete(e){this.isDelete=e},formatDate(e){e=new Date(e);let t=e.getDate();t=t<10?`0${t}`:t;let a=e.getMonth()+1;a=a<10?`0${a}`:a;let l=e.getFullYear();return e=`${l}-${a}-${t}`,e},saveData(){1==this.formDetailMode?this.addNewEmployee():this.updateEmployee()},addNewEmployee(){N.Z.post("https://cukcuk.manhnv.net/api/v1/Employees",JSON.stringify(this.employee),{headers:{"Content-Type":"application/json","Data-Type":"json"}}).then((e=>{console.log(e),this.$emit("isShowDialog",!1),this.$emit("childMethodCall")})).catch((e=>{let t=e.response.data["userMsg"];console.log(t),alert(t)}))},updateEmployee(){N.Z.put(`https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelectedId}`,JSON.stringify(this.employee),{headers:{"Content-Type":"application/json","Data-Type":"json"}}).then((e=>{console.log(e),this.$emit("isShowDialog",!1),this.$emit("childMethodCall")})).catch((e=>{console.log(e)}))},deleteEmployee(){N.Z["delete"](`https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelectedId}`).then((e=>{console.log(e),this.isDelete=!1,this.$emit("isShowDialog",!1),this.$emit("childMethodCall")})).catch((e=>{console.log(e)}))}},props:{isShow:{type:Boolean,default:!1},employeeSelected:{type:Object,default:{}},employeeSelectedId:{type:String,default:""},formDetailMode:{type:Number,default:1}},watch:{employeeSelected:function(e){this.employee=e},employeeSelectedId:function(e){e&&N.Z.get(`https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelectedId}`).then((e=>{this.employee=e.data})).catch((e=>{console.log(e),this.employee={},N.Z.get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode").then((e=>{this.employee.EmployeeCode=e.data})).catch((e=>{console.log(e)}))}))}},data(){return{employee:{EmployeeCode:"",FullName:"",DateOfBirth:"",Gender:"",Email:"",PhoneNumber:"",PositionName:"",DepartmentName:"",IdentityNumber:"",IdentityDate:"",IdentityPlace:"",JoinDate:"",PersonalTaxCode:""},v$:Jt(),isDelete:!1,isWarning:!1}},components:{ThePopup:Qe}};const Kt=(0,Ke.Z)(Zt,[["render",Ve]]);var Xt=Kt,Qt={name:"EmployeeList",components:{EmployeeDetail:Xt},beforeCreate(){},created(){this.isLoading=!0,this.loadData(),this.formatDate()},beforeMount(){},mounted(){},beforeUpdate(){},updated(){},beforeUnmount(){},unmounted(){},methods:{btnAddOnClick(){this.showDialogEmployeeDetail(!0),this.employeeSelected={},this.employeeSelectedId=null,this.formDetailMode=1},rowOnDblClick(e){this.employeeSelected=e,this.employeeSelectedId=e.EmployeeId,this.showDialogEmployeeDetail(!0),this.formDetailMode=2},btnRefreshOnClick(){this.loadData()},showDialogEmployeeDetail(e){this.isShowDialog=e},formatDate(e){e=new Date(e);let t=e.getDate();t=t<10?`0${t}`:t;let a=e.getMonth()+1;a=a<10?`0${a}`:a;let l=e.getFullYear();return e=`${l}-${a}-${t}`,e},formatSalary(e){try{return e&&(e=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)),e}catch(t){console.log(t)}},formatGender(e){try{switch(e){case 0:e="Nam";break;case 1:e="Nữ";break;case 2:e="Khác";break;default:break}return e}catch(t){console.log(t)}},formatWorkStatus(e){try{switch(e){case 0:e="Đang làm việc";break;case 1:e="Đã nghỉ việc";break;case 2:e="Đang thử việc";break;default:break}return e}catch(t){console.log(t)}},loadData(){this.isLoading=!0,N.Z.get("https://cukcuk.manhnv.net/api/v1/Employees").then((e=>{this.employeeList=e.data,this.isLoading=!1})).catch((e=>{console.log(e)}))}},watch:{},data(){return{employeeList:[],isShowDialog:!1,employeeSelectedId:null,employeeSelected:{},isLoading:!1,formDetailMode:0}}};const ea=(0,Ke.Z)(Qt,[["render",O]]);var ta=ea}}]);
//# sourceMappingURL=803.d8fdfb1a.js.map