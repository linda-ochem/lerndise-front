import ButtonHalf from "../Components/Buttons/ButtonHalf";
import Form from "../Components/Forms/Form";
import InputFile from "../Components/Forms/InputFile";
import LabelTextInput from "../Components/Forms/LabelTextInput";
import HeadingParagraphy from "../Components/Text/HeadingParagraphy";
import DesktopLayout from "../Layouts/DesktopLayout";
import { Link } from "react-router-dom";

const AddCourseScreen = () => {
  return (
    <DesktopLayout>
      <div>
        <div className="border-b border-solid border-[#CCCCCC] h-[72px] mb-[32px]"></div>
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
              <ButtonHalf skin="lerndis-black-pearl" color="white">
                <Link to="/createContent">Next</Link>
              </ButtonHalf>
            </div>
          </Form>
        </div>
      </div>
    </DesktopLayout>
  );
};

export default AddCourseScreen;
