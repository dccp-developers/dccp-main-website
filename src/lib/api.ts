/**
 * API helper functions for fetching data from the DCCP API
 */

export interface SchoolSettings {
  data: {
    school_year: string;
    school_year_string: string;
    semester: string;
    school_portal_url: string | null;
    school_portal_enabled: boolean;
    online_enrollment_enabled: boolean;
    features: {
      student_features: {
        enable_tuition_fees_page: boolean;
        enable_cheklist_page: boolean;
        enable_schedules_page: boolean;
        enable_class_rooms_page: boolean;
      };
      teacher_features: {
        enable_class_rooms_page: boolean;
        enable_schedules_page: boolean;
        enable_grades_page: boolean;
        enable_attendance_page: boolean;
      };
    };
    curriculum_year: string | null;
  };
}

/**
 * Fetches school settings from the DCCP API
 * @returns Promise<SchoolSettings>
 */
export async function getSchoolSettings(): Promise<SchoolSettings> {
  try {
    const response = await fetch('https://admin.dccp.edu.ph/api/v1/settings');
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    return data as SchoolSettings;
  } catch (error) {
    console.error('Error fetching school settings:', error);
    // Return default settings with enrollment disabled as fallback
    return {
      data: {
        school_year: "",
        school_year_string: "",
        semester: "",
        school_portal_url: null,
        school_portal_enabled: false,
        online_enrollment_enabled: false,
        features: {
          student_features: {
            enable_tuition_fees_page: false,
            enable_cheklist_page: false,
            enable_schedules_page: false,
            enable_class_rooms_page: false
          },
          teacher_features: {
            enable_class_rooms_page: false,
            enable_schedules_page: false,
            enable_grades_page: false,
            enable_attendance_page: false
          }
        },
        curriculum_year: null
      }
    };
  }
}
