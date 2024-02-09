import ButtonHalf from "../Components/Buttons/ButtonHalf";
import Form from "../Components/Forms/Form";
import InputFile from "../Components/Forms/InputFile";
import LabelTextInput from "../Components/Forms/LabelTextInput";
import DesktopProfileBar from "../Components/ProfileBars/DesktopProfileBar";
import HeadingParagraphy from "../Components/Text/HeadingParagraphy";
import DesktopLayout from "../Layouts/DesktopLayout";
import { Link } from "react-router-dom";

const AddCourseScreen = () => {
  return (
    <DesktopLayout>
      <div>
        {/* <div className="border-b border-solid border-[#CCCCCC] h-[72px] mb-[32px]"></div> */}
        <DesktopProfileBar />
        <div className="ml-[24px] mr-[45px]">
          <HeadingParagraphy
            heading="Add a New Course"
            paragraph="Kindly provide all the information required below. "
          />
          <Form>
            <LabelTextInput label="Course" placeholder="Social Studies" />
            <LabelTextInput
              label="Course Topic"
              placeholder="Family: Everything you should know"
            />
            <InputFile label="Course Cover Image" />
            <LabelTextInput
              label="Introduction"
              placeholder="Write a brief course introduction"
            />
            <div className="flex gap-x-6">
              <ButtonHalf>Save as draft</ButtonHalf>
              <Link className="w-1/2" to="/createContent">
                <ButtonHalf
                  skin="lerndis-black-pearl"
                  color="white"
                  width="full"
                >
                  Next
                </ButtonHalf>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default AddCourseScreen;
