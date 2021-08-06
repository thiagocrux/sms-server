const Patient = require('../../models/Patient');
const Exam = require('../../models/Exam');
const Treatment = require('../../models/Treatment');
const Notification = require('../../models/Notification');
const Observation = require('../../models/Observation');

exports.getReport = async (req, res) => {
  try {
    /* Patients */

    const patients = await Patient.find({});

    const filteredFemalePatients = patients.filter(
      ({ sex }) => sex === 'Feminino'
    );

    const filteredMalePatients = patients.filter(
      ({ sex }) => sex === 'Masculino'
    );

    const filteredIntersexPatients = patients.filter(
      ({ sex }) => sex === 'Intersexo'
    );

    const filteredAcquiredSyphilisOcurrences = patients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis adquirida'
    );

    const filteredCongenitalSyphilisOcurrences = patients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis congênita'
    );

    const filteredGestationalSyphilisOcurrences = patients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis em gestante'
    );

    /* Exames */

    const exams = await Exam.find({});

    const filteredQuickTests = exams.filter(
      ({ trepTestType }) => trepTestType === 'Teste rápido'
    );

    const filteredIgMTests = exams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgM'
    );

    const filteredIgGTests = exams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgG'
    );

    const filteredReagentResults = exams.filter(
      ({ trepTestResult }) => trepTestResult === 'Reagente'
    );

    const filteredNonReagentResults = exams.filter(
      ({ trepTestResult }) => trepTestResult === 'Não-reagente'
    );

    /* Notificações */

    const numberOfNotifications = await Notification.countDocuments({});

    /* Observações */

    const numberOfObservations = await Observation.countDocuments({});

    /* Tratamentos */

    const treatments = await Treatment.find({});

    const filteredTreatmentsUsingPenilillin = treatments.filter(
      ({ medication }) => medication === 'Penicilina'
    );

    const filteredTreatmentsUsingDoxycycline = treatments.filter(
      ({ medication }) => medication === 'Doxiciclina'
    );

    const filteredTreatmentsUsingCeftriaxone = treatments.filter(
      ({ medication }) => medication === 'Ceftriaxona'
    );

    res.status(200).json({
      status: 'success',
      stats: {
        numberOfPatients: patients.length,
        numberOfFemalePatients: filteredFemalePatients.length,
        numberOfMalePatients: filteredMalePatients.length,
        numberOfIntersexPatients: filteredIntersexPatients.length,
        acquiredSyphilisOcurrences: filteredAcquiredSyphilisOcurrences.length,
        congenitalSyphilisOcurrences:
          filteredCongenitalSyphilisOcurrences.length,
        gestationalSyphilisOcurrences:
          filteredGestationalSyphilisOcurrences.length,
        numberOfExams: exams.length,
        numberOfQuickTests: filteredQuickTests.length,
        numberOfIgMTests: filteredIgMTests.length,
        numberOfIgGTests: filteredIgGTests.length,
        numberOfReagentResults: filteredReagentResults.length,
        numberOfNonReagentResults: filteredNonReagentResults.length,
        numberOfNotifications,
        numberOfObservations,
        numberOfTreatments: treatments.length,
        numberOfTreatmentsUsingPenilicillin:
          filteredTreatmentsUsingPenilillin.length,
        numberOfTreatmentsUsingDoxycycline:
          filteredTreatmentsUsingDoxycycline.length,
        numberOfTreatmentsUsingCeftriaxone:
          filteredTreatmentsUsingCeftriaxone.length,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failure',
      error,
    });
  }
};

exports.getReportByYear = async (req, res) => {
  try {
    const { year } = req.params;

    /* Pacientes */

    const patients = await Patient.find({});

    const filteredPatients = patients.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    const filteredFemalePatients = filteredPatients.filter(
      ({ sex }) => sex === 'Feminino'
    );

    const filteredMalePatients = filteredPatients.filter(
      ({ sex }) => sex === 'Masculino'
    );

    const filteredIntersexPatients = filteredPatients.filter(
      ({ sex }) => sex === 'Intersexo'
    );

    const filteredAcquiredSyphilisOcurrences = filteredPatients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis adquirida'
    );

    const filteredCongenitalSyphilisOcurrences = filteredPatients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis congênita'
    );

    const filteredGestationalSyphilisOcurrences = filteredPatients.filter(
      ({ monitoringType }) => monitoringType === 'Sífilis em gestante'
    );

    /* Exames */

    const exams = await Exam.find({});

    const filteredExams = exams.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    const filteredQuickTests = filteredExams.filter(
      ({ trepTestType }) => trepTestType === 'Teste rápido'
    );

    const filteredIgMTests = filteredExams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgM'
    );

    const filteredIgGTests = filteredExams.filter(
      ({ trepTestType }) => trepTestType === 'FTA-ABS IgG'
    );

    const filteredReagentResults = filteredExams.filter(
      ({ trepTestResult }) => trepTestResult === 'Reagente'
    );

    const filteredNonReagentResults = filteredExams.filter(
      ({ trepTestResult }) => trepTestResult === 'Não-reagente'
    );

    /* Notificações */

    const notifications = await Notification.find({});

    const filteredNotifications = notifications.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    /* Observações */

    const observations = await Observation.find({});

    const filteredObservations = observations.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    /* Tratamentos */

    const treatments = await Treatment.find({});

    const filteredTreatments = treatments.filter(
      ({ createdAt }) => createdAt.getFullYear() === +year
    );

    const filteredTreatmentsUsingPenilillin = filteredTreatments.filter(
      ({ medication }) => medication === 'Penicilina'
    );

    const filteredTreatmentsUsingDoxycycline = filteredTreatments.filter(
      ({ medication }) => medication === 'Doxiciclina'
    );

    const filteredTreatmentsUsingCeftriaxone = filteredTreatments.filter(
      ({ medication }) => medication === 'Ceftriaxona'
    );

    res.status(200).json({
      status: 'success',
      stats: {
        numberOfPatients: filteredPatients.length,
        numberOfFemalePatients: filteredFemalePatients.length,
        numberOfMalePatients: filteredMalePatients.length,
        numberOfIntersexPatients: filteredIntersexPatients.length,
        acquiredSyphilisOcurrences: filteredAcquiredSyphilisOcurrences.length,
        congenitalSyphilisOcurrences:
          filteredCongenitalSyphilisOcurrences.length,
        gestationalSyphilisOcurrences:
          filteredGestationalSyphilisOcurrences.length,
        numberOfExams: filteredExams.length,
        numberOfQuickTests: filteredQuickTests.length,
        numberOfIgMTests: filteredIgMTests.length,
        numberOfIgGTests: filteredIgGTests.length,
        numberOfReagentResults: filteredReagentResults.length,
        numberOfNonReagentResults: filteredNonReagentResults.length,
        numberOfNotifications: filteredNotifications.length,
        numberOfObservations: filteredObservations.length,
        numberOfTreatments: filteredTreatments.length,
        numberOfTreatmentsUsingPenilicillin:
          filteredTreatmentsUsingPenilillin.length,
        numberOfTreatmentsUsingDoxycycline:
          filteredTreatmentsUsingDoxycycline.length,
        numberOfTreatmentsUsingCeftriaxone:
          filteredTreatmentsUsingCeftriaxone.length,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'failure',
      error,
    });
  }
};
